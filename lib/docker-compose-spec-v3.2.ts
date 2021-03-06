/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type DefinitionsDeployment = {
  [k: string]: any;
} | null;
export type ListOrDict =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string | number | null;
    }
  | string[];
export type ListOfStrings = string[];
export type StringOrList = string | ListOfStrings;
export type Labels =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string;
    }
  | string[];
/**
 * This interface was referenced by `PropertiesNetworks`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type DefinitionsNetwork = {
  [k: string]: any;
} | null;
/**
 * This interface was referenced by `PropertiesVolumes`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export type DefinitionsVolume = {
  [k: string]: any;
} | null;

export interface ConfigSchemaV32Json {
  version: string;
  services?: PropertiesServices;
  networks?: PropertiesNetworks;
  volumes?: PropertiesVolumes;
  secrets?: PropertiesSecrets;
}
export interface PropertiesServices {
  [k: string]: DefinitionsService;
}
/**
 * This interface was referenced by `PropertiesServices`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsService {
  deploy?: DefinitionsDeployment;
  build?:
    | string
    | {
        context?: string;
        dockerfile?: string;
        args?: ListOrDict;
        labels?: ListOrDict;
        cache_from?: ListOfStrings;
      };
  cap_add?: string[];
  cap_drop?: string[];
  cgroup_parent?: string;
  command?: string | string[];
  container_name?: string;
  depends_on?: ListOfStrings;
  devices?: string[];
  dns?: StringOrList;
  dns_search?: StringOrList;
  domainname?: string;
  entrypoint?: string | string[];
  env_file?: StringOrList;
  environment?: ListOrDict;
  expose?: (string | number)[];
  external_links?: string[];
  extra_hosts?: ListOrDict;
  healthcheck?: DefinitionsHealthcheck;
  hostname?: string;
  image?: string;
  ipc?: string;
  labels?: Labels;
  links?: string[];
  logging?: {
    driver?: string;
    options?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string | number | null;
    };
  };
  mac_address?: string;
  network_mode?: string;
  networks?:
    | ListOfStrings
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
         */
        [k: string]: {
          aliases?: ListOfStrings;
          ipv4_address?: string;
          ipv6_address?: string;
        } | null;
      };
  pid?: string | null;
  ports?: (
    | number
    | string
    | {
        mode?: string;
        target?: number;
        published?: number;
        protocol?: string;
      })[];
  privileged?: boolean;
  read_only?: boolean;
  restart?: string;
  security_opt?: string[];
  shm_size?: number | string;
  secrets?: (
    | string
    | {
        source?: string;
        target?: string;
        uid?: string;
        gid?: string;
        mode?: number;
        [k: string]: any;
      })[];
  sysctls?: ListOrDict;
  stdin_open?: boolean;
  stop_grace_period?: string;
  stop_signal?: string;
  tmpfs?: StringOrList;
  tty?: boolean;
  ulimits?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-z]+$".
     */
    [k: string]:
      | number
      | {
          hard: number;
          soft: number;
        };
  };
  user?: string;
  userns_mode?: string;
  volumes?: (
    | string
    | {
        type: string;
        source?: string;
        target?: string;
        read_only?: boolean;
        consistency?: string;
        bind?: {
          propagation?: string;
          [k: string]: any;
        };
        volume?: {
          nocopy?: boolean;
          [k: string]: any;
        };
      })[];
  working_dir?: string;
}
export interface DefinitionsHealthcheck {
  disable?: boolean;
  interval?: string;
  retries?: number;
  test?: string | string[];
  timeout?: string;
}
export interface PropertiesNetworks {
  [k: string]: DefinitionsNetwork;
}
export interface PropertiesVolumes {
  [k: string]: DefinitionsVolume;
}
export interface PropertiesSecrets {
  [k: string]: DefinitionsSecret;
}
/**
 * This interface was referenced by `PropertiesSecrets`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsSecret {
  file?: string;
  external?:
    | boolean
    | {
        [k: string]: any;
      };
  labels?: Labels;
}
