import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  return (
    <>
      <section>
        <Outlet />
      </section>
    </>
  );
}
