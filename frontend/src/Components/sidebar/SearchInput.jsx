import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversation";
import useGetCoversation from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { conversations } = useGetCoversation();
    const { setSelectedConversation } = useConversation();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;
        if (search.length < 3) {
            toast.error("Search must be at least 3 characters.");
            return; // Exit early
        }

        const conversation = conversations.find((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
        );

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch(""); // Clear search field
        } else {
            toast.error("No such user found.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex items-center max-w-sm px-4 py-2">
                <label htmlFor="simple-search" className="sr-only">
                    Search
                </label>
                <div className="relative w-full">
                    <input
                        type="text"
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-violet-700 rounded-lg border border-blue-700 hover:bg-blue-800"
                >
                    <CiSearch />
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
