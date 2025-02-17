"use client";

export default function Dropdowncustom() {
  return (
    <div>
      <select className="select select-success w-full max-w-xs gap-5">
        <option disabled selected>
          Pick your favorite anime
        </option>
        <option className="bg-yellow-200">One Piece</option>
        <option>Naruto</option>
        <option>Death Note</option>
        <option>Attack on Titan</option>
        <option>Bleach</option>
        <option>Fullmetal Alchemist</option>
        <option>Jojos Bizarre Adventure</option>
      </select>
    </div>
  );
}
