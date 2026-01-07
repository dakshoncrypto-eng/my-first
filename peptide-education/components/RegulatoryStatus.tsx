import { CheckCircle2, AlertTriangle, XCircle, HelpCircle } from 'lucide-react'

type StatusType = 'approved' | 'gray' | 'prohibited' | 'unknown'

interface RegulatoryStatusProps {
  status: StatusType
  jurisdiction?: string
  showLabel?: boolean
}

const statusConfig = {
  approved: {
    label: 'Approved',
    description: 'Approved for human use',
    className: 'status-approved',
    icon: CheckCircle2,
  },
  gray: {
    label: 'Gray Zone',
    description: 'Not approved, not explicitly prohibited',
    className: 'status-gray',
    icon: AlertTriangle,
  },
  prohibited: {
    label: 'Prohibited',
    description: 'Explicitly prohibited or controlled',
    className: 'status-prohibited',
    icon: XCircle,
  },
  unknown: {
    label: 'Unknown',
    description: 'Regulatory status unclear',
    className: 'bg-gray-100 text-gray-800',
    icon: HelpCircle,
  },
}

export function RegulatoryStatus({ status, jurisdiction, showLabel = true }: RegulatoryStatusProps) {
  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <span className={`status-badge ${config.className}`}>
      <Icon className="h-3.5 w-3.5 mr-1" />
      {showLabel && (jurisdiction ? `${jurisdiction}: ` : '')}
      {config.label}
    </span>
  )
}

interface RegulatoryTableProps {
  data: {
    peptide: string
    india: StatusType
    us: StatusType
    eu: StatusType
    wada: StatusType
    notes?: string
  }[]
}

export function RegulatoryTable({ data }: RegulatoryTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Peptide
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              India
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              US
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              EU
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              WADA
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.peptide}>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">{row.peptide}</td>
              <td className="px-4 py-3">
                <RegulatoryStatus status={row.india} showLabel={false} />
              </td>
              <td className="px-4 py-3">
                <RegulatoryStatus status={row.us} showLabel={false} />
              </td>
              <td className="px-4 py-3">
                <RegulatoryStatus status={row.eu} showLabel={false} />
              </td>
              <td className="px-4 py-3">
                <RegulatoryStatus status={row.wada} showLabel={false} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
