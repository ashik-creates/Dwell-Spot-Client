"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Chip, Table } from "@heroui/react";
import toast from "react-hot-toast";
import { Apartment } from "@/lib/types/apartments";
import DeleteApartmentModal from "./DeleteApartmentModal";

interface ManageApartmentsTableProps {
  apartments: Apartment[];
}

const ManageApartmentsTable = ({
  apartments = [],
}: ManageApartmentsTableProps) => {
  return (
    <div className="my-5 rounded-2xl border border-divider bg-content1 p-5">
      <div className="mb-5">
        <h2 className="text-2xl font-bold">Manage Apartments</h2>

        <p className="text-sm text-default-500">
          View, manage and remove apartment listings.
        </p>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content
            aria-label="Manage apartments table"
            className="min-w-[1100px]"
          >
            <Table.Header>
              <Table.Column>Image</Table.Column>

              <Table.Column isRowHeader>Title</Table.Column>

              <Table.Column>Location</Table.Column>

              <Table.Column>Price</Table.Column>

              <Table.Column>Type</Table.Column>

              <Table.Column>Status</Table.Column>

              <Table.Column>Featured</Table.Column>

              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body>
              {apartments.length === 0 ? (
                <Table.Row>
                  <Table.Cell>
                    <p className="py-5 text-center text-sm text-default-500">
                      No apartments found
                    </p>
                  </Table.Cell>

                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                  <Table.Cell />
                </Table.Row>
              ) : (
                apartments.map((apartment) => (
                  <Table.Row key={apartment._id}>
                    <Table.Cell>
                      <Image
                        src={apartment.image}
                        alt={apartment.title}
                        width={80}
                        height={60}
                        className="h-14 w-20 rounded-lg object-cover"
                      />
                    </Table.Cell>

                    <Table.Cell>
                      <div>
                        <h4 className="font-semibold">{apartment.title}</h4>

                        <p className="text-xs text-default-500">
                          {apartment.owner}
                        </p>
                      </div>
                    </Table.Cell>

                    <Table.Cell>{apartment.location}</Table.Cell>

                    <Table.Cell>
                      <span className="font-semibold text-[#FF5A3C]">
                        ${apartment.price}/month
                      </span>
                    </Table.Cell>

                    <Table.Cell>{apartment.type}</Table.Cell>

                    <Table.Cell>
                      <Chip
                        variant="primary"
                        className={
                          apartment.status === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }
                      >
                        {apartment.status}
                      </Chip>
                    </Table.Cell>

                    <Table.Cell>
                      <Chip
                        variant="primary"
                        className={
                          apartment.featured
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-700"
                        }
                      >
                        {apartment.featured ? "Featured" : "Not Featured"}
                      </Chip>
                    </Table.Cell>

                    <Table.Cell>
                      <div className="flex gap-2">
                        <Link href={`/apartments/${apartment._id}`}>
                          <Button size="sm" className="bg-[#FF5A3C] text-white">
                            View
                          </Button>
                        </Link>

                        <DeleteApartmentModal apartmentId={apartment._id} />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>

        <Table.Footer>
          <div className="px-4 py-2 text-sm text-default-500">
            Total Apartments: {apartments.length}
          </div>
        </Table.Footer>
      </Table>
    </div>
  );
};

export default ManageApartmentsTable;
