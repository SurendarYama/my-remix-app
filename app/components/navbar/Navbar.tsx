import {useRef} from "react";

export default function Navbar() {
    const dialogRef = useRef<HTMLDialogElement>(null);
    function handleClick(e:any){
        dialogRef.current && e.target.innerText === 'Cart'
            ? dialogRef.current?.showModal()
            : dialogRef.current?.close();
    }
    return (<div className={"flex justify-between bg-purple-300 p-5"}>
        <div>Yama Shop App</div>
        <dialog ref={dialogRef}>
            <button autoFocus onClick={handleClick}>Close</button>
            <p>This modal dialog has a groovy backdrop!</p>
        </dialog>
        <button onClick={handleClick}>Cart</button>
    </div>);
}