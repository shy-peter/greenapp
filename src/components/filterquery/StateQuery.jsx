import { Modal } from "@mantine/core";
import React from "react";

const StateQuery = ({opened, close, open,}) => {
  return (
    <Modal opened={opened} onClose={close} title="
    Search By Location" centered>
      {/* Modal content */}
    </Modal>

  );
};

export default StateQuery;
