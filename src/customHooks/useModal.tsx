import modalStore from "@/store/modalStore";
import { useRecoilState } from "recoil";

const useModal = (modalName: string) => {
  const [isOpenState, setIsOpenState] = useRecoilState(modalStore);

  type ModalKeys = keyof typeof isOpenState;

  const isOpen = isOpenState[modalName as ModalKeys];

  const onOpen = () => {
    setIsOpenState((prev) => ({
      ...prev,
      [modalName]: true,
    }));
  };

  const onClose = () => {
    setIsOpenState((prev) => ({
      ...prev,
      [modalName]: false,
    }));
  };

  return { isOpen, onOpen, onClose };
};

export default useModal;
