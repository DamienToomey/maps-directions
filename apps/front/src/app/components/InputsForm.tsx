import {
  FormControl,
  FormErrorMessage,
  HStack,
  IconButton,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useCallback } from 'react';

import { CloseIcon } from '@chakra-ui/icons';
import { useFormContext, useFormDispatch } from '../contexts/form.context';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

const getInputPlaceholder = (index: number, itemCount: number): string => {
  if (index === 0) {
    return 'Enter a starting point';
  } else if (index === itemCount - 1) {
    return 'Enter a destination';
  } else {
    return 'Enter a stop';
  }
};

interface Props {
  register: UseFormRegister<{
    [key: string]: string;
  }>;
  errors: FieldErrors<{
    [key: string]: string;
  }>;
}

export const InputsForm: React.FC<Props> = ({ errors, register }) => {
  const { inputKeys } = useFormContext();
  const dispatch = useFormDispatch();

  const onRemoveTown = useCallback(
    (inputKeyToDelete: string) => {
      dispatch({ type: 'removeInput', payload: { inputKeyToDelete } });
    },
    [dispatch]
  );

  return (
    <>
      {inputKeys.map((townKey, index) => (
        <FormControl key={townKey} isInvalid={errors[townKey] != null}>
          <VStack flexGrow={1} align="start">
            <HStack width="100%">
              <Input
                placeholder={getInputPlaceholder(index, inputKeys.length)}
                {...register(townKey, {
                  required: 'This field is required',
                  validate: (value) => value.trim() !== '',
                })}
              />
              <IconButton
                aria-label="Remove town"
                icon={<CloseIcon />}
                onClick={() => onRemoveTown(townKey)}
                visibility={inputKeys.length > 2 ? 'visible' : 'hidden'}
              />
            </HStack>

            <FormErrorMessage>{errors[townKey]?.message}</FormErrorMessage>
          </VStack>
        </FormControl>
      ))}
    </>
  );
};

export default InputsForm;
