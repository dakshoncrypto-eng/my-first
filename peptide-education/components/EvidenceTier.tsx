import { CheckCircle2, AlertCircle, AlertTriangle, HelpCircle, MessageCircle } from 'lucide-react'

type EvidenceTierLevel = 1 | 2 | 3 | 4 | 5

interface EvidenceTierProps {
  tier: EvidenceTierLevel
  showDescription?: boolean
}

const tierConfig = {
  1: {
    label: 'Tier 1: Robust Human Evidence',
    description: 'Multiple high-quality human RCTs with consistent results',
    className: 'evidence-tier-1',
    icon: CheckCircle2,
    color: 'text-green-600',
  },
  2: {
    label: 'Tier 2: Preliminary Human Evidence',
    description: 'Limited human studies, small sample sizes, or inconsistent results',
    className: 'evidence-tier-2',
    icon: AlertCircle,
    color: 'text-lime-600',
  },
  3: {
    label: 'Tier 3: Animal Studies Only',
    description: 'Evidence from animal or cell studies; no quality human data',
    className: 'evidence-tier-3',
    icon: AlertTriangle,
    color: 'text-orange-600',
  },
  4: {
    label: 'Tier 4: Theoretical/Mechanistic',
    description: 'Based on mechanism of action, not empirical testing',
    className: 'evidence-tier-4',
    icon: HelpCircle,
    color: 'text-red-600',
  },
  5: {
    label: 'Tier 5: Anecdotal Only',
    description: 'Based on user reports; no scientific validation',
    className: 'evidence-tier-5',
    icon: MessageCircle,
    color: 'text-gray-600',
  },
}

export function EvidenceTier({ tier, showDescription = false }: EvidenceTierProps) {
  const config = tierConfig[tier]
  const Icon = config.icon

  return (
    <div className="inline-flex flex-col">
      <span className={`evidence-tier ${config.className}`}>
        <Icon className={`h-3.5 w-3.5 mr-1 ${config.color}`} />
        {config.label}
      </span>
      {showDescription && (
        <span className="text-xs text-gray-500 mt-1">{config.description}</span>
      )}
    </div>
  )
}

export function EvidenceTierLegend() {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-3">Evidence Tier Legend</h4>
      <div className="space-y-2">
        {([1, 2, 3, 4, 5] as EvidenceTierLevel[]).map((tier) => (
          <EvidenceTier key={tier} tier={tier} showDescription />
        ))}
      </div>
    </div>
  )
}
