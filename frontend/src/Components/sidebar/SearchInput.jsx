import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
    return (
        <div>

            <form class="flex items-center max-w-sm px-4 py-2">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search name..." required />
                </div>
                <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-violet-700 rounded-lg border border-blue-700 hover:bg-blue-800 ">
                <CiSearch />
                </button>
            </form>

        </div>
    )
}

export default SearchInput
