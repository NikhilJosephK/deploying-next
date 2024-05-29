export default function ComplexLayout({
  children,
  notifications,
  revenue,
  users,
}) {
  return (
    <div>
      {children}
      <div className="flex">
        <div>
          <div className="w-[300px] h-[300px] border-white border-[1px]">
            {notifications}
          </div>
          <div className="w-[300px] h-[300px] border-white border-[1px]">
            {revenue}
          </div>
        </div>
        <div className="w-[600px] h-[600px] border-white border-[1px]">
          {users}
        </div>
      </div>
    </div>
  );
}
