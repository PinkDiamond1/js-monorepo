import { QuestionOutlineIcon } from '@chakra-ui/icons';
import { Text, Box, Tooltip, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { currency } from '../../../../utils/currency';
import { NumberInput } from './NumberInput';

interface Props {
  onChange: (value: number) => void;
  value: number;
  max: number;
}

export const Mint: FC<Props> = ({ onChange, value, max }) => {
  return (
    <Box mb="4">
      <Heading fontSize="md" mb="1">
        Mint snxUSD
      </Heading>
      <Text fontSize="sm" mb="1">
        Take an interest-free loan against your collateral. This increases your debt and decreases
        your C-Ratio.
      </Text>

      <Box bg="gray.900" mb="2" p="6" pb="4" borderRadius="12px">
        <Flex mb="3">
          <NumberInput value={value} onChange={onChange} max={max} />
        </Flex>
        <Flex alignItems="center">
          <Box>
            <Text fontSize="xs">
              Max Mint: ${currency(max)}
              <Tooltip
                color="white"
                label="You can't mint snxUSD that takes your C-Ratio below the target c-ratio of 300%."
              >
                <QuestionOutlineIcon transform="translateY(-1.5px)" ml="1" />
              </Tooltip>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
