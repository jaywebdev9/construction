import "server-only";

export const ROLES = [
  "SUPER_ADMIN",
  "ADMIN",
  "CONTENT_EDITOR",
  "PROJECT_MANAGER",
  "INQUIRY_MANAGER",
  "VIEWER",
] as const;

export type Role = (typeof ROLES)[number];

export const PERMISSIONS = {
  "projects.read": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR", "PROJECT_MANAGER", "VIEWER"],
  "projects.create": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR", "PROJECT_MANAGER"],
  "projects.update": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR", "PROJECT_MANAGER"],
  "projects.publish": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR"],
  "projects.delete": ["SUPER_ADMIN", "ADMIN"],
  "services.read": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR", "VIEWER"],
  "services.manage": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR"],
  "team.read": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR", "VIEWER"],
  "team.manage": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR"],
  "insights.read": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR", "VIEWER"],
  "insights.manage": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR"],
  "inquiries.read": ["SUPER_ADMIN", "ADMIN", "INQUIRY_MANAGER", "VIEWER"],
  "inquiries.update_status": ["SUPER_ADMIN", "ADMIN", "INQUIRY_MANAGER"],
  "inquiries.add_note": ["SUPER_ADMIN", "ADMIN", "INQUIRY_MANAGER"],
  "inquiries.assign": ["SUPER_ADMIN", "ADMIN", "INQUIRY_MANAGER"],
  "settings.update": ["SUPER_ADMIN", "ADMIN"],
  "users.invite": ["SUPER_ADMIN", "ADMIN"],
  "roles.manage": ["SUPER_ADMIN"],
  "media.upload": ["SUPER_ADMIN", "ADMIN", "CONTENT_EDITOR"],
} as const;

export type Permission = keyof typeof PERMISSIONS;

export function hasPermission(role: string, permission: Permission): boolean {
  const allowed = PERMISSIONS[permission] as readonly string[];
  return allowed.includes(role);
}

export function requirePermission(role: string, permission: Permission): void {
  if (!hasPermission(role, permission)) {
    throw new Error("FORBIDDEN");
  }
}
