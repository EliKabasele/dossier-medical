import { Antecedent } from './antecedent';
import { Patient } from './patient';

export interface DossierMedical {
  identification: Patient;
  antecedents: Antecedent;
  histoireMaladie: string;
  examenPhysic: string;
  hypotheseDiagnostic: string;
  bilanRadiologic: string;
  bilanBiologic: string;
  diagnosticRetenu: string;
  traitement: string;
}
