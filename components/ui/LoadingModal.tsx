import React from "react";
import { MD2Colors, ActivityIndicator } from "react-native-paper";
import Modal from "react-native-modal";
import { View } from "react-native";

interface loadingModalProps {
  visible?: boolean;
  hideModal?: () => void;
}
const LoadingModal = ({
  visible,
  hideModal,
}: loadingModalProps) => {
  return (
    <Modal
      isVisible={visible || false}
      onDismiss={hideModal}
      //   contentContainerStyle={containerStyle || { width:100, height:100 , borderRadius:10 }}
    
    >
      <View className="bg-white p-4 w-64 ">
      <ActivityIndicator
        animating={true}
        color={MD2Colors.blue400}
        className="w-full"
        size={'large'}
      />
      </View>

    </Modal>
  );
};

export default LoadingModal;
