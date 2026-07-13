import { getManageApartments } from "@/lib/api/apartment";
import ManageApartmentsTable from "./ManageApartmentsTable";



const ManageApartmentPage = async () => {
  const apartments = await getManageApartments();

  return (
    <div>
      <ManageApartmentsTable
        apartments={apartments}
      />
    </div>
  );
};

export default ManageApartmentPage;