import { FileText, AlertTriangle, CheckCircle2 } from 'lucide-react'

interface SummaryBoxProps {
  title?: string
  points: string[]
  type?: 'info' | 'warning' | 'success'
}

const typeConfig = {
  info: {
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
    iconColor: 'text-primary-600',
    icon: FileText,
  },
  warning: {
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    iconColor: 'text-amber-600',
    icon: AlertTriangle,
  },
  success: {
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconColor: 'text-green-600',
    icon: CheckCircle2,
  },
}

export function SummaryBox({ title = 'Key Takeaways', points, type = 'info' }: SummaryBoxProps) {
  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div className={`${config.bgColor} border ${config.borderColor} rounded-lg p-6 my-6`}>
      <h3 className="font-semibold text-gray-900 flex items-center mb-4">
        <Icon className={`h-5 w-5 mr-2 ${config.iconColor}`} />
        {title}
      </h3>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start text-gray-700">
            <span className={`font-bold mr-2 ${config.iconColor}`}>•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface UncertaintyBoxProps {
  title?: string
  level: 'low' | 'medium' | 'high' | 'very-high'
  explanation: string
}

const uncertaintyConfig = {
  low: { label: 'Low Uncertainty', color: 'bg-green-100 text-green-800' },
  medium: { label: 'Medium Uncertainty', color: 'bg-yellow-100 text-yellow-800' },
  high: { label: 'High Uncertainty', color: 'bg-orange-100 text-orange-800' },
  'very-high': { label: 'Very High Uncertainty', color: 'bg-red-100 text-red-800' },
}

export function UncertaintyBox({ title = 'Uncertainty Level', level, explanation }: UncertaintyBoxProps) {
  const config = uncertaintyConfig[level]

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-900">{title}</span>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${config.color}`}>
          {config.label}
        </span>
      </div>
      <p className="text-sm text-gray-600">{explanation}</p>
    </div>
  )
}
