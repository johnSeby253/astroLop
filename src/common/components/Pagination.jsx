import { Button } from "@/components/ui/button";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="flex justify-end gap-2 mt-4">
      <Button
        variant="outline"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </Button>

      <span className="text-sm flex items-center">
        Page {page} of {totalPages}
      </span>

      <Button
        variant="outline"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;