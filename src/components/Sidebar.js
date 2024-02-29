const menuItems = [
    { label: "Indicadores y Objetivos", href: "#" },
    { label: "Organización", href: "#" },
    { label: "RRHH", href: "#" },
    { label: "Procesos", href: "#" },
    { label: "Formación", href: "#" },
    { label: "Documentación", href: "#" },
    { label: "Equipamiento", href: "#" },
    { label: "Incidencias y Acciones Correctivas", href: "#" },
    { label: "Gesión de riesgos", href: "#" },
    { label: "Gesión Ambiental", href: "#" },
    { label: "Auditorías", href: "#" },
    { label: "Requisitos legales", href: "#" },
    { label: "Asistentes Virtuales", href: "#" },
];

export function Sidebar() {

    return (
        <div class="d-flex" id="wrapper">
            <div class="bg-light border-right" id="sidebar-wrapper">
                <div class="sidebar-heading">OptiZen</div>
                <div class="list-group list-group-flush">
                    {menuItems.map((item, index) => (
                        <a href={item.href} class="list-group-item list-group-item-action bg-light" key={index}>
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
