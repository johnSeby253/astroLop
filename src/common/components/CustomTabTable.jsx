import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Button from "./Button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

const CustomTabTable = ({
    columns,
    data,
    tableCellClass,
    pageSize = 10,
    totalCount,
    scrollHeight, // custom height for scrollable body
}) => {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(totalCount / pageSize);
    const visiblePages = 5;

    const startPage = Math.floor((page - 1) / visiblePages) * visiblePages + 1;
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const start = (page - 1) * pageSize;
    const paginatedData = data.slice(start, start + pageSize);

    return (
        <div>
            <div className="overflow-y-auto" style={{ maxHeight: scrollHeight }}>
                <Table className="w-full border-collapse">
                    <TableHeader className="sticky top-0 bg-[#EDEDED] rounded-2xl z-10 shadow-sm">
                        <TableRow>
                            {columns.map((col) => (
                                <TableHead
                                    key={col.accessor}
                                    className="text-[#3B3B3B] font-inter text-[14px] font-semibold tracking-[0.062px] text-center border-b"
                                >
                                    {col.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {paginatedData?.length ? (
                            paginatedData.map((row, index) => (
                                <TableRow key={index}>
                                    {columns.map((col) => (
                                        <TableCell
                                            key={col.accessor}
                                            className={`p-4 border-b font-inter text-[13px] font-semibold text-center ${row.status === "Inactive"
                                                ? "text-[#BCBCBC]"
                                                : tableCellClass
                                                }`}
                                        >
                                            {col.render ? col.render(row) : row[col.accessor]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="text-center py-6"
                                >
                                    No data available
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            {totalCount > pageSize && (
                <div className="flex items-center justify-center md:justify-end gap-3 md:gap-6 mt-6">
                    {/* Previous Button */}
                    <Button
                        className="flex items-center justify-center gap-3"
                        variant="paginationButtons"
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    >
                        <ChevronsLeft />
                        <span className="hidden md:inline">Previous</span>
                    </Button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-2">
                        {pages.map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => setPage(pageNumber)}
                                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
                  ${page === pageNumber
                                        ? "border-2 border-orange-500 text-orange-500"
                                        : "border border-gray-300 text-gray-400"
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        ))}
                    </div>

                    {/* Next Button */}
                    <Button
                        className="flex items-center justify-center gap-3"
                        variant="paginationButtons"
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                    >
                        <span className="hidden md:inline">Next</span>
                        <ChevronsRight />
                    </Button>
                </div>
            )}
        </div>
    );
};

export default CustomTabTable;
