"use client";

export default function ModalTest() {
  return (
    <>
      <div>
        <details className="dropdown">
          <summary className="btn bg-purple-400 text-black hover:bg-purple-600">
            open or close
          </summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-52 bg-white p-2 shadow">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
    </>
  );
}
