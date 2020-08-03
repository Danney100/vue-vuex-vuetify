// Const for roles
export const ADMIN = 1
export const DUTY_TEAM_MEMBER = 2
export const QI_COMPANY = 3
export const COAST_GUARD = 4
export const VESSEL_VIEWER = 5
export const NASA_NAVY = 6
export const COMPANY_PLAN_MANAGER = 7
const allRoles = [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COAST_GUARD, VESSEL_VIEWER, QI_COMPANY, COMPANY_PLAN_MANAGER]

const assignedRoles = {
  Lock: [...allRoles],
  Register: [...allRoles],
  Login: [...allRoles],
  'Admin Workflow': [ADMIN],
  'Docx Viewer': [...allRoles],
  Dashboard: [...allRoles],
  Companies: [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COAST_GUARD, QI_COMPANY, COMPANY_PLAN_MANAGER],
  'Company / VRP Express': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Company Detail': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COAST_GUARD, QI_COMPANY, COMPANY_PLAN_MANAGER],
  'Company / General Information': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COAST_GUARD, QI_COMPANY, COMPANY_PLAN_MANAGER],
  'Company / Addressses': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COAST_GUARD, QI_COMPANY, COMPANY_PLAN_MANAGER],
  'Company / VRP': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Company / Capabilities': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Company / Affiliates': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COMPANY_PLAN_MANAGER],
  'Company / Individuals': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COMPANY_PLAN_MANAGER],
  'Company / Vessels': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COAST_GUARD, QI_COMPANY, COMPANY_PLAN_MANAGER],
  'Company / Files': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, QI_COMPANY, COMPANY_PLAN_MANAGER],
  'Company / Notes': [ADMIN, DUTY_TEAM_MEMBER],
  Vessels: [...allRoles],
  'Vessel / VRP Express': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Vessel Detail': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COAST_GUARD, QI_COMPANY],
  'Vessel / General Information': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COAST_GUARD, QI_COMPANY],
  'Vessel / Construction': [...allRoles],
  'Vessel / Capabilities': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Vessel / AIS Data': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Vessel / Notes': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, COMPANY_PLAN_MANAGER],
  'Vessel / Files': [...allRoles],
  Individuals: [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Individuals Detail': [...allRoles],
  'Individual / General Information': [...allRoles],
  'Individual / Address': [...allRoles],
  'Individual / Capabilities': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Individual / Files': [...allRoles],
  'Individual / Notes': [ADMIN, DUTY_TEAM_MEMBER],
  'Individual / Change Password': [...allRoles],
  'System Reports': [ADMIN],
  'User Permissions': [...allRoles],
  'COP Map': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Latest AIS Positions': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  Fleets: [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Fleets Detail': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Geographic Annexes': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, QI_COMPANY, COMPANY_PLAN_MANAGER],
  'Alerts System': [ADMIN],
  AIS: [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY],
  'Tabletop Exercise': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, QI_COMPANY, COMPANY_PLAN_MANAGER],
  'Remote Assessment': [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY, QI_COMPANY, COMPANY_PLAN_MANAGER],
}

// Const for Tabs
const companyTabs = [
  {
    title: 'General',
    icon: 'mdi-information',
    name: 'Company / General Information',
    to: 'general',
  },
  {
    title: 'Addresses',
    icon: 'mdi-map-marker',
    name: 'Company / Addresses',
    to: 'addresses',
  },
  {
    title: 'VRP',
    icon: 'mdi-notebook',
    name: 'Company / VRP',
    to: 'plan',
  },
  {
    title: 'Capabilities',
    icon: 'mdi-pier-crane',
    name: 'Company / Capabilities',
    to: 'smff',
  },
  {
    title: 'Affiliates',
    icon: 'mdi-domain',
    name: 'Company / Affiliates',
    to: 'affiliates',
  },
  {
    title: 'Individuals',
    icon: 'mdi-account-tie',
    name: 'Company / Individuals',
    to: 'individuals',
  },
  {
    title: 'Vessels',
    icon: 'mdi-ferry',
    name: 'Company / Vessels',
    to: 'vessels',
  },
  {
    title: 'Files',
    icon: 'mdi-folder-open',
    name: 'Company / Files',
    to: 'files',
  },
  {
    title: 'Notes',
    icon: 'mdi-pen',
    name: 'Company / Notes',
    to: 'notes',
  },
]

const vesselTabs = [
  {
    title: 'General',
    icon: 'mdi-information',
    name: 'Vessel / General Information',
    to: 'general',
  },
  {
    title: 'Construction',
    icon: 'mdi-ruler-square',
    name: 'Vessel / Construction',
    to: 'construction',
  },
  {
    title: 'Capabilities',
    icon: 'mdi-pier-crane',
    name: 'Vessel / SMFF Capabilities',
    to: 'smff',
  },
  {
    title: 'AIS Data',
    icon: 'mdi-map-marker',
    name: 'Vessel / AIS Data',
    to: 'ais',
  },
  {
    title: 'Files',
    icon: 'mdi-folder-open',
    name: 'Vessel / Files',
    to: 'files',
  },
  {
    title: 'Notes',
    icon: 'mdi-pen',
    name: 'Vessel / Notes',
    to: 'notes',
  },
]

const individualTabs = [
  {
    title: 'General',
    icon: 'mdi-information',
    name: 'Individual / General Information',
    to: 'general',
  },
  {
    title: 'Address',
    icon: 'mdi-map-marker',
    name: 'Individual / Address',
    to: 'address',
  },
  {
    title: 'Capabilities',
    icon: 'mdi-pier-crane',
    name: 'Individual / Capabilities',
    to: 'smff',
  },
  {
    title: 'Files',
    icon: 'mdi-folder-open',
    name: 'Individual / Files',
    to: 'files',
  },
  {
    title: 'Notes',
    icon: 'mdi-pen',
    name: 'Individual / Notes',
    to: 'notes',
  },
  {
    title: 'Password',
    icon: 'mdi-lock',
    name: 'Individual / Change Password',
    to: 'change-password',
  },
]

// Const for API Guard
const assignedAPIs = {
  fleets: [ADMIN, DUTY_TEAM_MEMBER],
  'vendors/pi': [ADMIN, DUTY_TEAM_MEMBER],
  'vendors/qi': [ADMIN, DUTY_TEAM_MEMBER],
  'vendors/providers': [ADMIN, DUTY_TEAM_MEMBER],
  'vendors/insurers': [ADMIN, DUTY_TEAM_MEMBER],
  'vendors/societies': [ADMIN, DUTY_TEAM_MEMBER],
  'vendors/types': [ADMIN, DUTY_TEAM_MEMBER],
  'companies/user/poc': [ADMIN, DUTY_TEAM_MEMBER, COAST_GUARD, QI_COMPANY, COMPANY_PLAN_MANAGER, NASA_NAVY],
  'company/getCompanyInfo': [ADMIN, DUTY_TEAM_MEMBER, COAST_GUARD, QI_COMPANY, COMPANY_PLAN_MANAGER, NASA_NAVY],
  'companies/short': [ADMIN, DUTY_TEAM_MEMBER, COAST_GUARD, QI_COMPANY, COMPANY_PLAN_MANAGER, NASA_NAVY],
}

// Util Functions
export const guardRoute = (routeName, role) => {
  return assignedRoles[routeName] ? assignedRoles[routeName].includes(role) : true
}

export const guardAPI = (apiUrl, role) => {
  return assignedAPIs[apiUrl] ? assignedAPIs[apiUrl].includes(role) : true
}

// Check permission for writing
export const checkCUD = role => {
  return [ADMIN, DUTY_TEAM_MEMBER].includes(role)
}

// Check permission for reading inactive/active fields in the table
export const includeInactiveAndVrp = role => {
  return [ADMIN, DUTY_TEAM_MEMBER, NASA_NAVY].includes(role)
}

// Check permission for Companies Tabs
export const checkCompaniesTab = role => {
  const nasaTabs = ['general', 'addresses', 'plan', 'smff', 'affiliates', 'individuals', 'vessels', 'files']
  const coastGuardTabs = ['general', 'addresses', 'vessels']
  const qiCompanyTabs = ['general', 'addresses', 'vessels', 'files']
  const planManagerTabs = ['general', 'addresses', 'affiliates', 'individuals', 'vessels', 'files', 'notes']
  const vesselViewerTabs = []
  if (role === COAST_GUARD) return companyTabs.filter(tab => coastGuardTabs.includes(tab.to))
  if (role === NASA_NAVY) return companyTabs.filter(tab => nasaTabs.includes(tab.to))
  if (role === VESSEL_VIEWER) return vesselViewerTabs
  if (role === QI_COMPANY) return companyTabs.filter(tab => qiCompanyTabs.includes(tab.to))
  if (role === COMPANY_PLAN_MANAGER) return companyTabs.filter(tab => planManagerTabs.includes(tab.to))
  return companyTabs
}

// Check permission for Vessels Tabs
export const checkVesselsTab = role => {
  const coastGuardTabs = ['general', 'construction', 'files']
  const qiCompanyTabs = ['general', 'construction', 'files']
  const planManagerTabs = ['construction', 'files']
  const vesselViewerTabs = ['construction', 'files']
  if (role === COAST_GUARD) return vesselTabs.filter(tab => coastGuardTabs.includes(tab.to))
  if (role === VESSEL_VIEWER) return vesselTabs.filter(tab => vesselViewerTabs.includes(tab.to))
  if (role === QI_COMPANY) return vesselTabs.filter(tab => qiCompanyTabs.includes(tab.to))
  if (role === COMPANY_PLAN_MANAGER) return vesselTabs.filter(tab => planManagerTabs.includes(tab.to))
  return vesselTabs
}

// Check permission for Vessel Files Tab
export const checkVesselFilesTab = (tab, role) => {
  const severalTabs = ['Fire Plans', 'Drawings', 'Models']
  const singleTab = ['Fire Plans']
  if (role === NASA_NAVY || role === COMPANY_PLAN_MANAGER) return severalTabs.includes(tab)
  else if (role === COAST_GUARD || role === VESSEL_VIEWER || role === QI_COMPANY) return singleTab.includes(tab)
  else return true
}

// Check permission for Vessel General Tabs
export const checkVesselGeneralTabs = (tab, role) => {
  const tabs = ['vessel_data', 'plan_data']
  if (role === ADMIN || role === DUTY_TEAM_MEMBER || role === NASA_NAVY) return true
  else if (role === COAST_GUARD || role === QI_COMPANY) {
    return tabs.includes(tab)
  } else return false
}

// Check permission for Individuals Tabs
export const checkIndividualsTab = role => {
  const nasaTabs = ['general', 'address', 'smff', 'files', 'change-password']
  const normalTabs = ['general', 'address', 'files', 'change-password']
  if (role === NASA_NAVY) return individualTabs.filter(tab => nasaTabs.includes(tab.to))
  else if (role === COAST_GUARD || role === VESSEL_VIEWER || role === QI_COMPANY || role === COMPANY_PLAN_MANAGER) return individualTabs.filter(tab => normalTabs.includes(tab.to))
  else return individualTabs
}
