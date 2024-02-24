import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";
import { animals } from "./data";
import { useRef, useState } from "react";
import Image from "next/image";

function Modals() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formRef = useRef();
  const [files, setFiles] = useState([]);

  async function handleInputFiles(e) {
    const files = e.target.files;

    const newFiles = [...files].filter((file) => {
      if (file.size < 1024 * 1024 && file.type.startsWith("image/")) {
        file.url = URL.createObjectURL(file);
        return file;
      }
    });

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    newFiles.forEach((newFile) => {
      console.log("File URL:", newFile.url);
    });
  }

  return (
    <>
      <Button
        onPress={onOpen}
        className="px-5 py-2 bg-blue-500 rounded-lg font-bold text-white cursor-pointer"
      >
        Add
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isKeyboardDismissDisabled={false}
        className=""
      >
        <ModalContent className="max-h-full overflow-x-auto">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 ">
                Add Componen
              </ModalHeader>
              <ModalBody>
                <div className="w-full flex flex-col gap-4">
                  <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                    <Input type="text" variant={"bordered"} label="Email" />
                  </div>
                  <Textarea
                    label="Description"
                    variant="bordered"
                    placeholder="Enter your description"
                    disableAnimation
                    disableAutosize
                    classNames={{
                      base: "max-w-full",
                      input: "resize-y min-h-[40px]",
                    }}
                  />
                  <Select
                    variant={"bordered"}
                    label="Select an category"
                    className="max-w-full"
                  >
                    {animals.map((animal) => (
                      <SelectItem key={animal.value} value={animal.value}>
                        {animal.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <div
                    className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                    ref={formRef}
                  >
                    <label className="rounded-xl border py-4 px-4 w-full hover:border-gray-600 cursor-pointer">
                      <input
                        type="file"
                        accept="image/"
                        style={{ display: "none" }}
                        onChange={handleInputFiles}
                      />
                      <span className="">Choose File</span>
                      {files.map((file, i) => (
                        <div key={i}>
                        {/* {file.url} */}
                          <Image
                            src={file.url}
                            width={50}
                            height={50}
                            alt="foto"
                          />
                        </div>
                      ))}
                    </label>
                  </div>
                  <ModalFooter>
                    <div className="flex flex-row gap-3 mb-20 md:mb-0 lg:mb-0">
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Save
                      </Button>
                    </div>
                  </ModalFooter>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modals;
