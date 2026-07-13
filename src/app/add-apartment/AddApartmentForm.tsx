"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import {
  Button,
  Card,
  Form,
  TextField,
  Label,
  Input,
  Select,
  ListBox,
  Checkbox,
  FieldError,
  TextArea,
} from "@heroui/react";
import { addApartment } from "@/lib/action/apartment";
import { useRouter } from "next/navigation";

const AddApartmentForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);

      const apartment = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        price: Number(formData.get("price")),
        location: formData.get("location") as string,
        bedrooms: Number(formData.get("bedrooms")),
        bathrooms: Number(formData.get("bathrooms")),
        size: Number(formData.get("size")),
        type: formData.get("type") as string,
        status: formData.get("status") as string,
        owner: formData.get("owner") as string,
        image: formData.get("image") as string,
        featured: formData.get("featured") === "on",
      };

      const data = await addApartment(apartment);

      if(data.success) {
        toast.success(data.message);
        router.push("/apartments");
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Card className="rounded-3xl border border-gray-200 bg-white p-8 shadow-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#2C2C2C]">
            Add New Apartment
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Fill out the information below to publish a new apartment listing.
          </p>
        </div>

        <Form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField
            isRequired
            name="title"
            className="flex w-full flex-col gap-2"
          >
            <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Apartment Title
            </Label>

            <Input
              placeholder="Modern Studio Apartment"
              className="h-12 rounded-xl border border-gray-300 px-4 transition-all duration-200 focus:border-[#FF5A3C]"
            />

            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField
            isRequired
            name="description"
            className="flex w-full flex-col gap-2"
          >
            <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Description
            </Label>

            <TextArea
              rows={6}
              placeholder="Describe the apartment..."
              className="rounded-xl border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-[#FF5A3C]"
            />

            <FieldError className="text-xs text-red-500" />
          </TextField>

          <div className="grid w-full gap-5 md:grid-cols-2">
            <TextField isRequired name="price" className="flex flex-col gap-2">
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Monthly Rent
              </Label>

              <Input
                type="number"
                placeholder="1200"
                className="h-12 rounded-xl border border-gray-300 px-4"
              />

              <FieldError className="text-xs text-red-500" />
            </TextField>

            <TextField
              isRequired
              name="location"
              className="flex flex-col gap-2"
            >
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Location
              </Label>

              <Input
                placeholder="Downtown, New York"
                className="h-12 rounded-xl border border-gray-300 px-4"
              />

              <FieldError className="text-xs text-red-500" />
            </TextField>
          </div>

          <div className="grid w-full gap-5 md:grid-cols-3">
            <TextField
              isRequired
              name="bedrooms"
              className="flex flex-col gap-2"
            >
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Bedrooms
              </Label>

              <Input
                type="number"
                placeholder="2"
                className="h-12 rounded-xl border border-gray-300 px-4"
              />

              <FieldError className="text-xs text-red-500" />
            </TextField>

            <TextField
              isRequired
              name="bathrooms"
              className="flex flex-col gap-2"
            >
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Bathrooms
              </Label>

              <Input
                type="number"
                placeholder="2"
                className="h-12 rounded-xl border border-gray-300 px-4"
              />

              <FieldError className="text-xs text-red-500" />
            </TextField>

            <TextField isRequired name="size" className="flex flex-col gap-2">
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Size (sq ft)
              </Label>

              <Input
                type="number"
                placeholder="850"
                className="h-12 rounded-xl border border-gray-300 px-4"
              />

              <FieldError className="text-xs text-red-500" />
            </TextField>
          </div>
          <div className="grid w-full gap-5 md:grid-cols-2">
            <Select
              isRequired
              name="type"
              className="flex w-full flex-col gap-2"
            >
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Apartment Type
              </Label>

              <Select.Trigger className="flex h-12 items-center justify-between rounded-xl border border-gray-300 bg-white px-4 transition-all duration-200 focus:border-[#FF5A3C]">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                <ListBox className="p-2">
                  {["Studio", "Apartment", "Duplex", "Penthouse", "Villa"].map(
                    (type) => (
                      <ListBox.Item
                        key={type}
                        id={type}
                        textValue={type}
                        className="cursor-pointer rounded-lg px-3 py-2 transition hover:bg-[#FFF3F0] data-[selected=true]:bg-[#FFF3F0] data-[selected=true]:text-[#FF5A3C]"
                      >
                        <Label className="cursor-pointer">{type}</Label>

                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    ),
                  )}
                </ListBox>
              </Select.Popover>

              <FieldError className="text-xs text-red-500" />
            </Select>

            <Select
              isRequired
              name="status"
              defaultSelectedKey="Available"
              className="flex w-full flex-col gap-2"
            >
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </Label>

              <Select.Trigger className="flex h-12 items-center justify-between rounded-xl border border-gray-300 bg-white px-4 transition-all duration-200 focus:border-[#FF5A3C]">
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                <ListBox className="p-2">
                  {["Available", "Booked"].map((status) => (
                    <ListBox.Item
                      key={status}
                      id={status}
                      textValue={status}
                      className="cursor-pointer rounded-lg px-3 py-2 transition hover:bg-[#FFF3F0] data-[selected=true]:bg-[#FFF3F0] data-[selected=true]:text-[#FF5A3C]"
                    >
                      <Label className="cursor-pointer">{status}</Label>

                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>

              <FieldError className="text-xs text-red-500" />
            </Select>
          </div>

          <div className="grid w-full gap-5 md:grid-cols-2">
            <TextField isRequired name="owner" className="flex flex-col gap-2">
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Owner Name
              </Label>

              <Input
                placeholder="Urban Living"
                className="h-12 rounded-xl border border-gray-300 px-4"
              />

              <FieldError className="text-xs text-red-500" />
            </TextField>

            <TextField name="image" className="flex flex-col gap-2">
              <Label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Image URL
              </Label>

              <Input
                placeholder="https://images.pexels.com/..."
                className="h-12 rounded-xl border border-gray-300 px-4"
              />

              <FieldError className="text-xs text-red-500" />
            </TextField>
          </div>

          <div className="w-full rounded-2xl border border-gray-200 bg-[#FAFAFA] p-5">
            <Checkbox name="featured" className="flex items-center  gap-3">
              <Checkbox.Control className="border border-gray-400">
                <Checkbox.Indicator  />
              </Checkbox.Control>

              <Checkbox.Content>
                <Label className="cursor-pointer font-medium  text-[#2C2C2C]">
                  Feature this apartment on the homepage
                </Label>
              </Checkbox.Content>
            </Checkbox>
          </div>

          <Button
            type="submit"
            isDisabled={isLoading}
            className="mt-4 flex h-12 w-full items-center justify-center rounded-xl bg-[#FF5A3C] text-sm font-semibold text-white transition hover:bg-[#ef4b2d]"
          >
            {isLoading ? "Adding Apartment..." : "Add Apartment"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddApartmentForm;
