export function Page(props){

    return(
    <div id="page-content-wrapper">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <button class="btn btn-primary" id="menu-toggle">Toggle Menu</button>
    </nav>
    <div class="container-fluid">
        <h1 class="mt-4">{props.title || ''}</h1>
        {props.children || ''}
        {/* <div class="table-responsive">
            <table class="table">
                <thead>
                    <tr>
                        <th>Cargo</th>
                        <th>Nivel</th>
                        <th>Departamento/Proceso</th>
                        <th>Dependencia</th>
                        <th>Responsabilidades</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div> */}
    </div>
</div>
    )
}