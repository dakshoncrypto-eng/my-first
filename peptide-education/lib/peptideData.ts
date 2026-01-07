export type EvidenceTier = 1 | 2 | 3 | 4 | 5
export type RegulatoryStatus = 'approved' | 'gray' | 'prohibited' | 'unknown'

export interface PeptideData {
  id: string
  name: string
  aliases: string[]
  category: string
  mechanism: {
    summary: string
    detailed?: string
  }
  evidence: {
    tier: EvidenceTier
    humanStudies: string
    animalStudies: string
    summary: string
  }
  regulatory: {
    india: RegulatoryStatus
    indiaDetails: string
    us: RegulatoryStatus
    eu: RegulatoryStatus
    wada: RegulatoryStatus
    wadaDetails?: string
  }
  riskSignals: string[]
  commonClaims: {
    claim: string
    evidenceSupport: 'strong' | 'moderate' | 'weak' | 'none'
    notes: string
  }[]
  sources: {
    title: string
    url?: string
    type: 'study' | 'review' | 'regulatory' | 'other'
  }[]
  lastUpdated: string
  isPremium: boolean
}

// Preview peptides (free access)
export const previewPeptides: PeptideData[] = [
  {
    id: 'bpc-157',
    name: 'BPC-157',
    aliases: ['Body Protection Compound-157', 'Pentadecapeptide BPC 157'],
    category: 'Healing/Recovery',
    mechanism: {
      summary: 'Gastric pentadecapeptide that may promote angiogenesis and tissue healing through multiple pathways including NO system modulation.',
      detailed: 'BPC-157 is a 15-amino acid peptide derived from human gastric juice. Research suggests it may influence the NO system, promote angiogenesis, and modulate growth factor expression. Most mechanistic understanding comes from animal models.',
    },
    evidence: {
      tier: 3,
      humanStudies: 'Very limited. A few small trials exist for inflammatory bowel disease and wound healing, but data quality is low and results are not conclusive.',
      animalStudies: 'Extensive animal literature showing effects on tendon, muscle, bone, and gut healing in rats. However, animal results do not reliably translate to humans.',
      summary: 'Evidence is primarily from animal studies. Human evidence is very limited and not sufficient to draw conclusions about efficacy or safety in humans.',
    },
    regulatory: {
      india: 'gray',
      indiaDetails: 'Not approved by CDSCO for human use. Not scheduled as a controlled substance. Exists in a regulatory gray zone when sold as "research chemical." Import may face customs scrutiny.',
      us: 'gray',
      eu: 'gray',
      wada: 'prohibited',
      wadaDetails: 'Prohibited under S0 (Non-Approved Substances) in the WADA Prohibited List.',
    },
    riskSignals: [
      'No long-term human safety data',
      'Unknown drug interactions',
      'Quality control concerns with research chemical suppliers',
      'Prohibited in sports (WADA)',
      'Uncertain purity and contamination risk',
      'Legal gray zone in most jurisdictions',
    ],
    commonClaims: [
      {
        claim: 'Accelerates tendon and ligament healing',
        evidenceSupport: 'weak',
        notes: 'Animal studies show promise; no quality human trials confirm this in humans.',
      },
      {
        claim: 'Heals gut lining / treats leaky gut',
        evidenceSupport: 'weak',
        notes: 'Some animal data and very limited human data on IBD. Not sufficient for conclusions.',
      },
      {
        claim: 'Protects against NSAID-induced gut damage',
        evidenceSupport: 'moderate',
        notes: 'Animal studies consistent; limited human relevance data.',
      },
    ],
    sources: [
      { title: 'Sikiric P et al. BPC 157 and Standard Angiogenic Growth Factors (2018)', type: 'review' },
      { title: 'WADA Prohibited List 2024', url: 'https://www.wada-ama.org/en/prohibited-list', type: 'regulatory' },
      { title: 'Chang CH et al. Pentadecapeptide BPC 157 - Review (2019)', type: 'review' },
    ],
    lastUpdated: 'January 2026',
    isPremium: false,
  },
  {
    id: 'tb-500',
    name: 'TB-500',
    aliases: ['Thymosin Beta-4', 'Tβ4'],
    category: 'Healing/Recovery',
    mechanism: {
      summary: 'Synthetic version of thymosin beta-4, a naturally occurring peptide involved in cell migration, wound healing, and tissue repair.',
      detailed: 'TB-500 is a synthetic fragment of thymosin beta-4. It may promote cell migration, blood vessel formation, and reduce inflammation. Most research is preclinical.',
    },
    evidence: {
      tier: 3,
      humanStudies: 'Very limited human data. Some early-phase trials in wound healing contexts, but no robust efficacy data in healthy humans or athletes.',
      animalStudies: 'Animal studies show effects on wound healing, cardiac repair after injury, and hair regrowth. Translation to humans is uncertain.',
      summary: 'Primarily animal evidence. Human data is very limited and not sufficient to support efficacy claims.',
    },
    regulatory: {
      india: 'gray',
      indiaDetails: 'Not approved by CDSCO. Not scheduled. Similar gray zone status as other research peptides.',
      us: 'gray',
      eu: 'gray',
      wada: 'prohibited',
      wadaDetails: 'Explicitly prohibited under S2 (Peptide Hormones, Growth Factors) on WADA Prohibited List.',
    },
    riskSignals: [
      'No long-term human safety data',
      'Prohibited in sports (explicitly listed by WADA)',
      'Theoretical cancer concerns (promotes angiogenesis)',
      'Quality control issues with research suppliers',
      'Unknown interactions with other compounds',
    ],
    commonClaims: [
      {
        claim: 'Accelerates muscle and tendon healing',
        evidenceSupport: 'weak',
        notes: 'Animal data exists; human evidence insufficient.',
      },
      {
        claim: 'Improves flexibility and reduces injury risk',
        evidenceSupport: 'none',
        notes: 'No scientific evidence for this claim.',
      },
      {
        claim: 'Promotes hair regrowth',
        evidenceSupport: 'weak',
        notes: 'Some animal data; no quality human studies.',
      },
    ],
    sources: [
      { title: 'Goldstein AL et al. Thymosin β4: a multi-functional regenerative peptide (2012)', type: 'review' },
      { title: 'WADA Prohibited List 2024', url: 'https://www.wada-ama.org/en/prohibited-list', type: 'regulatory' },
    ],
    lastUpdated: 'January 2026',
    isPremium: false,
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    aliases: ['Ipamorelin Acetate'],
    category: 'Growth Hormone Secretagogue',
    mechanism: {
      summary: 'Selective growth hormone secretagogue that stimulates GH release from the pituitary without significantly affecting cortisol or prolactin.',
      detailed: 'Ipamorelin is a pentapeptide that acts as a ghrelin/GHS receptor agonist. It stimulates growth hormone release with relative selectivity compared to other GHRPs.',
    },
    evidence: {
      tier: 2,
      humanStudies: 'Some human pharmacokinetic and safety studies exist. Was investigated for post-surgical recovery. More human data than many peptides, but still limited.',
      animalStudies: 'Consistent animal data showing GH release. Better characterized than some other peptides.',
      summary: 'Better evidence base than most research peptides, but still insufficient for clinical use recommendations.',
    },
    regulatory: {
      india: 'gray',
      indiaDetails: 'Not approved by CDSCO. Research chemical status.',
      us: 'gray',
      eu: 'gray',
      wada: 'prohibited',
      wadaDetails: 'Prohibited under S2 (Growth Hormone Releasing Factors).',
    },
    riskSignals: [
      'GH manipulation carries inherent risks',
      'Prohibited in sports',
      'Long-term safety unknown',
      'May affect glucose metabolism',
      'Quality concerns with research sources',
    ],
    commonClaims: [
      {
        claim: 'Increases growth hormone levels',
        evidenceSupport: 'moderate',
        notes: 'Human studies confirm acute GH release. Long-term effects and clinical relevance less clear.',
      },
      {
        claim: 'Improves body composition',
        evidenceSupport: 'weak',
        notes: 'Indirect inference from GH effects; limited direct evidence.',
      },
      {
        claim: 'Anti-aging effects',
        evidenceSupport: 'none',
        notes: 'No scientific evidence supports anti-aging claims.',
      },
    ],
    sources: [
      { title: 'Raun K et al. Ipamorelin, the first selective GHS receptor agonist (1998)', type: 'study' },
      { title: 'WADA Prohibited List 2024', type: 'regulatory' },
    ],
    lastUpdated: 'January 2026',
    isPremium: false,
  },
]

// Premium peptides (requires purchase)
export const premiumPeptides: PeptideData[] = [
  {
    id: 'cjc-1295',
    name: 'CJC-1295',
    aliases: ['CJC-1295 DAC', 'CJC-1295 no DAC', 'Modified GRF 1-29'],
    category: 'Growth Hormone Secretagogue',
    mechanism: {
      summary: 'Growth hormone releasing hormone (GHRH) analog that stimulates GH release from the pituitary.',
    },
    evidence: {
      tier: 2,
      humanStudies: 'Some human PK studies exist. Was investigated clinically but development discontinued.',
      animalStudies: 'Standard preclinical data showing GH release.',
      summary: 'Moderate evidence base for GH release; clinical development was halted.',
    },
    regulatory: {
      india: 'gray',
      indiaDetails: 'Not approved. Research chemical status.',
      us: 'gray',
      eu: 'gray',
      wada: 'prohibited',
    },
    riskSignals: [
      'Clinical development discontinued',
      'Prohibited in sports',
      'Long-term safety unknown',
    ],
    commonClaims: [],
    sources: [],
    lastUpdated: 'January 2026',
    isPremium: true,
  },
  // More premium peptides would be added here...
]

export const allPeptides = [...previewPeptides, ...premiumPeptides]

export function getPeptideById(id: string): PeptideData | undefined {
  return allPeptides.find((p) => p.id === id)
}

export function getPreviewPeptides(): PeptideData[] {
  return previewPeptides
}

export function getPremiumPeptides(): PeptideData[] {
  return premiumPeptides
}
