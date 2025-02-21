import React, { useContext } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button } from "@mantine/core";
import { FaArrowDown } from "react-icons/fa";
import { CarContext } from "../../../context/GreenAppContext";

import UserProfileTab from "./UserProfileTab";
import SettingsProfileTab from "../Settings/SettingsProfileTab";
import SettingsProfileTabMobile from "../Settings/SettingsProfileTabMobile";

const ProfileTab = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { activePath } = useContext(CarContext);
  console.log("location: " + activePath);
  const title = activePath.startsWith('/settings/')?'Setting':'Profile'

  return (
    <>
      <Drawer color="red" opened={opened} onClose={close} title={`${title}`}>
        {activePath.startsWith("/settings/") ? (
          <SettingsProfileTabMobile />
        ) : (
          <UserProfileTab />
        )}
      </Drawer>

      <Button
        leftSection={<FaArrowDown />}
        onClick={open}
        variant="light"
        color="green"
      >
        {/* Profile Tab */}
        {activePath.startsWith("/settings/") ? "Settings Tabs" : "Profile Tabs"}
      </Button>
    </>
  );
};

export default ProfileTab;
