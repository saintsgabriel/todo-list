import Card from "../components/card/Card";
import InputCheckbox from "../components/input-checkbox/InputCheckbox";
import InputText from "../components/input-text/InputText";
import Text from "../components/text/Text";
import ButtonIcon from "../components/button-icon/ButtonIcon";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import { useState } from "react";

export default function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox />
          <Text className="flex-1">Fazer compras da semana!</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary"></ButtonIcon>
            <ButtonIcon
              onClick={handleEdit}
              icon={PencilIcon}
              variant="tertiary"
            ></ButtonIcon>
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleCancelEdit}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
