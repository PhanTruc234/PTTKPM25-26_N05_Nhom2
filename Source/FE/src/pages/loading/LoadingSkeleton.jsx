import { Skeleton } from "@mui/material";

export default function LoadingSkeleton({ loading }) {
  if (!loading) return null; 
  return (
    <div className="mt-6 md:mt-0 text-center group relative">
      <div className="bg-white rounded-xl overflow-hidden lg:h-[385px]">
        <Skeleton variant="rectangular" width="100%" height={350} />
        <div className="flex justify-center items-center gap-1 mt-5">
          <Skeleton variant="text" width="80px" height={20} />
        </div>
        <Skeleton variant="text" width="90%" height={30} />
      </div>
    </div>
  );
}
