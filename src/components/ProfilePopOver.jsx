import React, { useContext, useState } from "react";
import { Popover, Text, Button, Menu, Modal } from "@mantine/core";

import {
  FaAd,
  FaBalanceScale,
  FaBell,
  FaCar,
  FaMoneyBill,
  FaNetworkWired,
  FaSave,
  FaSignOutAlt,
} from "react-icons/fa";
import {
  FaGear,
  FaMessage,
  FaPeopleGroup,
  FaPerson,
  FaRegMessage,
  FaSignalMessenger,
  FaSpaghettiMonsterFlying,
} from "react-icons/fa6";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { CarContext } from "../context/GreenAppContext";

export function ProfilePopOver({ handleSelectedButton }) {
  const { showLogOutMenu, setShowLogOutMenu } = useContext(CarContext);


  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button
            style={{
              borderRadius: "9999px",
              height: "30px",
              width: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
              backgroundColor: "#D1D5DB",
              border: "0",
            }}
          >
            PO
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Profile</Menu.Label>
          <Menu.Item
            onClick={() => handleSelectedButton("/profile/Advert")}
            leftSection={<FaAd />}
          >
            Advert
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("/profile/Saved")}
            leftSection={<FaSave />}
          >
            Saved
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("/profile/notification")}
            leftSection={<FaBell />}
          >
            Notification
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("/profile/Message")}
            leftSection={<FaMessage />}
          >
            Message
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("profile/Sell my car")}
            leftSection={<FaCar />}
          >
            Sell my car
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("/clients/viewed")}
            leftSection={<FaPeopleGroup />}
          >
            My Clients
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("profile/Feedback")}
            leftSection={<FaRegMessage />}
          >
            Feedback
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("/profile/Performance")}
            leftSection={<FaNetworkWired />}
          >
            Performance
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("/profile/Balance")}
            leftSection={<FaSpaghettiMonsterFlying />}
          >
            Balance
          </Menu.Item>
          <Menu.Item
            onClick={() => handleSelectedButton("/settings/personal-details")}
            leftSection={<FaGear />}
          >
            Setting
          </Menu.Item>
          <Menu.Divider />
          <Menu.Label>log out</Menu.Label>
          <Menu.Item
            onClick={() => {
              setShowLogOutMenu(true);
            }}
            color="red"
            leftSection={<FaSignOutAlt />}
          >
            Log Out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

