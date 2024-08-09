export interface ISession {
  id: number;
  startingDateTime: string;
  ipAddress: string;
  windowsUserName: string;
  revitUserName: string;
  revitVersion: string;
  licenseKey: string;
  accessToken: string;
}
