"use client";
import { useState } from "react";
import "../globals.css";

export default function Layout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil sit at aspernatur, harum dolores obcaecati sapiente voluptatem quaerat omnis consequatur eum expedita. Voluptatem reprehenderit sint, accusamus enim veritatis facere?</p>
        </div>
    );
}
