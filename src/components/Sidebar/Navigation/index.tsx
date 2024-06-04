import {
  Users,
  HeartPulse,
  Briefcase,
  Cross,
  SquareEqualIcon,
  StethoscopeIcon,
  LayoutDashboard,
  Newspaper,
} from 'lucide-react'

import { NavItem } from './NavItem'

export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
    <nav className="flex flex-col gap-0.5">
      <NavItem icon={LayoutDashboard} title="Dashboard" link="./"/>
      <NavItem icon={Users} title="Pacientes" link="./pacientes"/>
      <NavItem icon={Briefcase} title="Médicos" link="./medicos"/>
      <NavItem icon={HeartPulse} title="Consultas" link="./consultas"/>
      <NavItem icon={Newspaper} title="Tratamentos" link="./tratamentos"/>
      <NavItem icon={Cross} title="Medicamentos" link="./medicamentos"/>
      <NavItem icon={StethoscopeIcon} title="Hospitalizações" link="./hospitalizacoes"/>
      <NavItem icon={SquareEqualIcon} title="Exames e Resultados" link="./examesResultados"/>
    </nav>
  )
}
