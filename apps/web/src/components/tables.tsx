import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"

export function SimpleTable({ items, columns }: {
    items: {
        column: string,
        cells: string[]
    }[],
    columns: string[]
}) {
    return (
        <Table className="w-[100%]">
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHead key={column}>{column}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.map((item) => (
                    <TableRow key={item.column}>
                        {item.cells.map((cell) => (
                            <TableCell key={cell} className="p-4">{cell}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
