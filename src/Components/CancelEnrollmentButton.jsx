"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CancelEnrollButton = ({ enrollmentId, token }) => {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleCancelEnrollment = async () => {
        try {
            setIsDeleting(true);
            
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${enrollmentId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                // Refreshes the server data on the current route without resetting state
                router.refresh();
            } else {
                console.error("Failed to cancel enrollment");
            }
        } catch (error) {
            console.error("An error occurred during cancellation:", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <AlertDialog>
            <Button
                color="danger"
                variant="light"
                size="sm"
            >
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Confirm Cancellation</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-slate-600">
                                Are you sure you want to cancel this enrollment? This action cannot be undone and you
                                will lose access to the Rooms materials.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button
                                slot="close"
                                variant="tertiary"
                                disabled={isDeleting}
                            >
                                Keep Enrollment
                            </Button>
                            <Button
                                slot="close"
                                color="danger"
                                className="font-bold"
                                onPress={handleCancelEnrollment}
                                isLoading={isDeleting}
                            >
                                Yes, Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelEnrollButton;