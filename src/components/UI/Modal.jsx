/* eslint-disable @next/next/no-img-element */
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const ModalCompo = ({ selectedProduct, isOpen, onClose, getWhatsAppUrl }) => {
  return (
    <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <div className="grid grid-cols-2 gap-6 p-4">
          {/* Left column for product image */}
          <div className="flex flex-col items-center">
            <ModalHeader className="flex flex-col gap-1 text-[#17acc0] text-xl">
              {selectedProduct?.productName}
            </ModalHeader>
            <img
              src={selectedProduct?.image}
              alt={selectedProduct?.productName}
              className="rounded-lg w-full mt-10"
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </div>
          {/* Right column for product details and order button */}
          <div className="flex flex-col justify-between">
            <div>
              <ModalBody className="mt-5">
                <p className="text-[#17acc0] text-lg">{`Model: ${selectedProduct?.model}`}</p>
                <p>{`Price: ${selectedProduct?.price}`}</p>
                <p>
                  <span className="font-bold">Details</span> <br />
                  <span>{selectedProduct?.productDetails}</span>
                </p>

                <p>
                  <span className="font-bold">Additional Information</span>{" "}
                  <br />
                  <span>{selectedProduct?.additionalInformation}</span>
                </p>

                {selectedProduct?.benefits && (
                  <p>
                    <span className="font-bold">Benefits</span> <br />
                    <span>{selectedProduct?.benefits}</span>
                  </p>
                )}
              </ModalBody>
            </div>
            <ModalFooter>
              <Button
                className="text-[#17acc0] border  border-[#17acc0] rounded-none "
                variant="light"
                as="a"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Order By Whatsapp
              </Button>
              <Button
                className="border rounded-none border-danger-300"
                color="danger"
                variant="light"
                onPress={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};

export default ModalCompo;
