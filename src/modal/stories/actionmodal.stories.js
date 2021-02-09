import ActionModalExample from './components/ActionModalExample';
import DeleteModalExample from './components/DeleteModalExample';
import { Button } from '../../button';
import { Card, CardSegment } from '../../layout';
import { Input } from '../../text';
import { ActionModal } from '..';

export default {
  title: 'ActionModal',

  decorators: [
    (Story) => (
      <Card>
        <CardSegment>
          <Story />
        </CardSegment>
      </Card>
    ),
  ],
};

export const BasicActionModal = () => (
  <ActionModalExample>
    {({
      closeModal, isVisible, onClickPrimary, onClickSecondary, requestState, openModal
    }) => (
      <>
        <ActionModal
            isVisible={isVisible}
            onClickPrimary={onClickPrimary}
            onClickSecondary={onClickSecondary}
            onClose={closeModal}
            requestState={requestState}
            shouldStretchButtons
            textPrimary="Simulate Success"
            textSecondary="Simulate Failure"
            textTitle="Action Action Action" />
        <Button onClick={openModal}>Show Modal</Button>
      </>
    )}
  </ActionModalExample>
);

BasicActionModal.story = {
  name: 'basic action modal',
};

export const DeleteOrgExample = () => (
  <DeleteModalExample>
    {({
      closeModal,
      deleteThing,
      handleOnChangeDeleteConfirmation,
      isValidConfirmation,
      isVisible,
      openModal,
      requestState,
    }) => (
      <CardSegment vertical>
        <ActionModal
            isVisible={isVisible}
            onClickPrimary={deleteThing}
            onClickSecondary={closeModal}
            onClose={closeModal}
            requestState={requestState}
            requestStateComponents={{
              STANDBY: (
                <>
                  <span>Are you absolutely sure you want to delete this thing?</span>
                  <br />
                  <span>To confirm, please type &quot;OpenLattice&quot;.</span>
                  <Input invalid={!isValidConfirmation} onChange={handleOnChangeDeleteConfirmation} />
                </>
              ),
              SUCCESS: <span>Success! The thing has been deleted.</span>,
              FAILURE: <span>Delete failed. Please try again.</span>,
            }}
            shouldBeCentered={false}
            textPrimary="Yes, delete"
            textSecondary="No, cancel"
            textTitle="Delete Thing" />
        <Button mode="primary" onClick={() => openModal(true)}>
          Delete Thing (success)
        </Button>
        <br />
        <br />
        <Button mode="primary" onClick={() => openModal(false)}>
          Delete Thing (failure)
        </Button>
      </CardSegment>
    )}
  </DeleteModalExample>
);

DeleteOrgExample.story = {
  name: 'delete org example',
};
