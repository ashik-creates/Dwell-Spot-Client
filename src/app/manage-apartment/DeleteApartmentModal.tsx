"use client";

import { useState } from "react";
import { Modal, Button } from "@heroui/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteApartment } from "@/lib/action/apartment";

const DeleteApartmentModal = ({ apartmentId }: { apartmentId: string }) => {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);

    try {
      const res = await deleteApartment(apartmentId);

      setLoading(false);

      if (res.deletedCount > 0) {
        toast.success("Apartment deleted successfully");
        setOpen(false);
        router.refresh();
      } else {
        toast.error(
          res.message || "Failed to delete apartment"
        );
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setOpen}
    >
      <Button
        size="sm"
        className="bg-red-500 text-white"
        onClick={() => setOpen(true)}
      >
        Delete
      </Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>
                Delete Apartment
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body>
              <p className="text-default-600">
                Are you sure you want to delete this
                apartment? This action cannot be undone.
              </p>

              <Modal.Footer className="px-0">
                <Button
                  variant="outline"
                  onPress={() => setOpen(false)}
                >
                  Cancel
                </Button>

                <Button
                  className="bg-red-500 text-white"
                  isDisabled={loading}
                  onPress={handleDelete}
                >
                 {loading ? "Deleting..." : "Permanently Delete"}
                </Button>
              </Modal.Footer>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteApartmentModal;