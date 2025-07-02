export default function NoResults({ searchTerm }) {
  return (
    <div className="text-center text-gray-500 mt-10 text-lg">
      لا يوجد نتائج لبحث "<span className="font-bold">{searchTerm}</span>"
    </div>
  );
}
