import type { ProductQueryParams } from '../../../../types/products';

type SortFilterProps = {
  params: ProductQueryParams;
  onParamChange: (key: keyof ProductQueryParams, value: string) => void;
  onReset: () => void;
};

const SortFilterControls = ({ params, onParamChange, onReset }: SortFilterProps) => {
  // Shared styles for our inputs
  const inputBase =
    'block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white';

  return (
    <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex flex-wrap items-end gap-4">
        {/* Search */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Search</label>
          <input
            type="text"
            placeholder="Search products..."
            className={inputBase}
            value={params.search}
            onChange={(e) => onParamChange('search', e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="w-full sm:w-44">
          <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Category</label>
          <select
            className={inputBase}
            value={params.category}
            onChange={(e) => onParamChange('category', e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="1">Electronics</option>
            <option value="2">Clothing</option>
            <option value="3">Books</option>
            <option value="4">Home & Garden</option>
          </select>
        </div>

        {/* Filter Type */}
        <div className="w-full sm:w-40">
          <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Status</label>
          <select className={inputBase} value={params.filter} onChange={(e) => onParamChange('filter', e.target.value)}>
            <option value="all">All Items</option>
            <option value="in-stock">In Stock</option>
            <option value="on-sale">On Sale</option>
          </select>
        </div>

        {/* Sorting */}
        <div className="w-full sm:w-44">
          <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Sort By</label>
          <select className={inputBase} value={params.sort} onChange={(e) => onParamChange('sort', e.target.value)}>
            <option value="name">Name (A-Z)</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="w-full sm:w-auto px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default SortFilterControls;
