import {
  Users,
  HeartPulse,
  Briefcase,
  Cross,
  SquareEqualIcon,
  StethoscopeIcon,
  LayoutDashboard,
} from 'lucide-react'

import { NavItem } from './NavItem'

export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
    <nav className="flex flex-col gap-0.5">
      <NavItem icon={LayoutDashboard} title="Dashboard"/>
      <NavItem icon={Users} title="Pacientes" />
      <NavItem icon={Briefcase} title="Médicos" />
      <NavItem icon={HeartPulse} title="Consultas" />
      <NavItem icon={Cross} title="Medicamentos" />
      <NavItem icon={StethoscopeIcon} title="Hospitalizações" />
      <NavItem icon={SquareEqualIcon} title="Exames e Resultados" />
    </nav>
  )
}
