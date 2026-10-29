import GemstoneCollectionTable from "./GemstoneCollectionTable";
import GoldBoxesTable from "./GoldBoxesTable";
import JewelryPiecesTable from "./JewelryPiecesTable";
import ServicesMaterialsTable from "./ServicesMaterialsTable";

export default function AllTables() {
  return (
    <section className="col-span-9 flex flex-col gap-3 min-h-0 min-w-0 overflow-y-auto">
      {/* Table-1 */}
      <JewelryPiecesTable />

      {/* Table-2 */}
      <GoldBoxesTable />

      {/* Table-3 */}
      <ServicesMaterialsTable />

      {/* Table-4 */}
      <GemstoneCollectionTable />

    </section>
  );
}