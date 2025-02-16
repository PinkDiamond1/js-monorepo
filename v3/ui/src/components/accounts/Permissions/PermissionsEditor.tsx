import { AddIcon, EditIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Grid,
  GridItem,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { FC, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useManagePermissions } from '../../../hooks';
import { formatShortAddress } from '../../shared/Address';
import { AddressInput } from './AddressInput';

type Props =
  | {
      address: string;
      permissions: Array<string>;
    }
  | Record<string, never>;

export const PermissionsEditor: FC<Props> = ({
  address: existingAddress,
  permissions: existingPermissions,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isAlertOpen, onOpen: onAlertOpen, onClose: onAlertClose } = useDisclosure();
  const cancelRef = useRef();
  const { id: accountId } = useParams();
  const [permissions, setPermissions] = useState<Array<string>>(existingPermissions);
  const [address, setAddress] = useState<string>(existingAddress ?? '');

  const { exec, status } = useManagePermissions(
    accountId!,
    address,
    existingPermissions,
    permissions
  );
  const isExecuting = useMemo(() => status === 'pending', [status]);
  const onAlertCancel = () => {
    setPermissions(existingPermissions); // reset
    onAlertClose();
  };

  return (
    <>
      {existingAddress ? (
        <Flex>
          <EditIcon color="blue.400" onClick={onOpen} mx="2" />
          <SmallCloseIcon
            color="blue.400"
            cursor="pointer"
            onClick={() => {
              setPermissions([]);
              onAlertOpen();
            }}
          />
        </Flex>
      ) : (
        <Button size="xs" colorScheme="blue" onClick={onOpen}>
          <AddIcon mr="1.5" />
          Add Address
        </Button>
      )}
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          bg="black"
          color="white"
          borderColor="gray.800"
          borderWidth="2px"
          borderRadius="2"
        >
          <ModalHeader>{`${existingAddress ? 'Modify' : 'Add'} Permissions`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddressInput
              address={address}
              onChange={(addressVal: string) => setAddress(addressVal)}
              readOnly={Boolean(existingAddress)}
            />

            <Heading size="sm" mb="2">
              Select Permissions
            </Heading>
            <CheckboxGroup
              defaultValue={existingPermissions}
              onChange={(t: Array<string>) => {
                setPermissions(t);
              }}
            >
              <Grid gap={3} templateColumns="repeat(2, 1fr)">
                <GridItem>
                  <Checkbox value="stake" mb="2">
                    Stake
                  </Checkbox>
                  <br />
                  <Checkbox value="unstake" mb="2">
                    Unstake
                  </Checkbox>
                  <br />
                  <Checkbox value="claim" mb="2">
                    Claim Rewards
                  </Checkbox>
                  <br />
                  <Checkbox value="burn" mb="2">
                    Burn
                  </Checkbox>
                  <br />
                </GridItem>

                <GridItem>
                  <Checkbox value="mint" mb="2">
                    Mint
                  </Checkbox>
                  <br />
                  <Checkbox value="manage-locks" mb="2">
                    Manage Locks
                  </Checkbox>
                  <br />
                  <Checkbox value="manage-staking-position" mb="2">
                    Manage Staking Position
                  </Checkbox>
                  <br />
                  <Checkbox value="modify">Modify Permissions</Checkbox>
                  <br />
                </GridItem>
              </Grid>
            </CheckboxGroup>

            <Button
              isLoading={isExecuting}
              mt="6"
              mb="4"
              colorScheme="blue"
              onClick={async () => {
                await exec();
                onClose();
              }}
            >
              {existingAddress ? 'Update' : 'Add'} Permissions
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      <AlertDialog isOpen={isAlertOpen} leastDestructiveRef={cancelRef} onClose={onAlertCancel}>
        <AlertDialogOverlay>
          <AlertDialogContent
            bg="black"
            color="white"
            borderColor="gray.800"
            borderWidth="2px"
            borderRadius="2"
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Permissions
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to revoke all permissions for{' '}
              <p>{formatShortAddress(address)}</p>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onAlertCancel} variant="link" padding="4">
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={async () => {
                  await exec();
                  onAlertClose();
                }}
                isLoading={isExecuting}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
