import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace bilibili. */
export namespace bilibili {

    /** Namespace live. */
    namespace live {

        /** Namespace component. */
        namespace component {

            /** Namespace common_model. */
            namespace common_model {

                /** Namespace effect. */
                namespace effect {

                    /** Properties of an EffectConfigItem. */
                    interface IEffectConfigItem {

                        /** EffectConfigItem type */
                        type?: (number|Long|null);

                        /** EffectConfigItem webSvga */
                        webSvga?: (string|null);

                        /** EffectConfigItem horizontalSvga */
                        horizontalSvga?: (string|null);

                        /** EffectConfigItem verticalSvga */
                        verticalSvga?: (string|null);

                        /** EffectConfigItem webMp4 */
                        webMp4?: (string|null);

                        /** EffectConfigItem webMp4Json */
                        webMp4Json?: (string|null);

                        /** EffectConfigItem horizontalMp4 */
                        horizontalMp4?: (string|null);

                        /** EffectConfigItem verticalMp4 */
                        verticalMp4?: (string|null);

                        /** EffectConfigItem id */
                        id?: (number|Long|null);

                        /** EffectConfigItem planPlatform */
                        planPlatform?: ((number|Long)[]|null);

                        /** EffectConfigItem bindGiftIds */
                        bindGiftIds?: ((number|Long)[]|null);

                        /** EffectConfigItem webMp4Md5 */
                        webMp4Md5?: (string|null);

                        /** EffectConfigItem horizontalMp4Md5 */
                        horizontalMp4Md5?: (string|null);

                        /** EffectConfigItem verticalMp4Md5 */
                        verticalMp4Md5?: (string|null);

                        /** EffectConfigItem webMp4Crc32 */
                        webMp4Crc32?: (number|Long|null);

                        /** EffectConfigItem horizontalMp4Crc32 */
                        horizontalMp4Crc32?: (number|Long|null);

                        /** EffectConfigItem verticalMp4Crc32 */
                        verticalMp4Crc32?: (number|Long|null);

                        /** EffectConfigItem webMp4FileSize */
                        webMp4FileSize?: (number|Long|null);

                        /** EffectConfigItem horizontalMp4FileSize */
                        horizontalMp4FileSize?: (number|Long|null);

                        /** EffectConfigItem verticalMp4FileSize */
                        verticalMp4FileSize?: (number|Long|null);

                        /** EffectConfigItem h265Conf */
                        h265Conf?: (bilibili.live.component.common_model.effect.IH265Conf|null);
                    }

                    /** Represents an EffectConfigItem. */
                    class EffectConfigItem implements IEffectConfigItem {

                        /**
                         * Constructs a new EffectConfigItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.effect.IEffectConfigItem);

                        /** EffectConfigItem type. */
                        public type: (number|Long);

                        /** EffectConfigItem webSvga. */
                        public webSvga: string;

                        /** EffectConfigItem horizontalSvga. */
                        public horizontalSvga: string;

                        /** EffectConfigItem verticalSvga. */
                        public verticalSvga: string;

                        /** EffectConfigItem webMp4. */
                        public webMp4: string;

                        /** EffectConfigItem webMp4Json. */
                        public webMp4Json: string;

                        /** EffectConfigItem horizontalMp4. */
                        public horizontalMp4: string;

                        /** EffectConfigItem verticalMp4. */
                        public verticalMp4: string;

                        /** EffectConfigItem id. */
                        public id: (number|Long);

                        /** EffectConfigItem planPlatform. */
                        public planPlatform: (number|Long)[];

                        /** EffectConfigItem bindGiftIds. */
                        public bindGiftIds: (number|Long)[];

                        /** EffectConfigItem webMp4Md5. */
                        public webMp4Md5: string;

                        /** EffectConfigItem horizontalMp4Md5. */
                        public horizontalMp4Md5: string;

                        /** EffectConfigItem verticalMp4Md5. */
                        public verticalMp4Md5: string;

                        /** EffectConfigItem webMp4Crc32. */
                        public webMp4Crc32: (number|Long);

                        /** EffectConfigItem horizontalMp4Crc32. */
                        public horizontalMp4Crc32: (number|Long);

                        /** EffectConfigItem verticalMp4Crc32. */
                        public verticalMp4Crc32: (number|Long);

                        /** EffectConfigItem webMp4FileSize. */
                        public webMp4FileSize: (number|Long);

                        /** EffectConfigItem horizontalMp4FileSize. */
                        public horizontalMp4FileSize: (number|Long);

                        /** EffectConfigItem verticalMp4FileSize. */
                        public verticalMp4FileSize: (number|Long);

                        /** EffectConfigItem h265Conf. */
                        public h265Conf?: (bilibili.live.component.common_model.effect.IH265Conf|null);

                        /**
                         * Creates a new EffectConfigItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EffectConfigItem instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.effect.IEffectConfigItem): bilibili.live.component.common_model.effect.EffectConfigItem;

                        /**
                         * Encodes the specified EffectConfigItem message. Does not implicitly {@link bilibili.live.component.common_model.effect.EffectConfigItem.verify|verify} messages.
                         * @param message EffectConfigItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.effect.IEffectConfigItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EffectConfigItem message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.effect.EffectConfigItem.verify|verify} messages.
                         * @param message EffectConfigItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.effect.IEffectConfigItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EffectConfigItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EffectConfigItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.effect.EffectConfigItem;

                        /**
                         * Decodes an EffectConfigItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EffectConfigItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.effect.EffectConfigItem;

                        /**
                         * Verifies an EffectConfigItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EffectConfigItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EffectConfigItem
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.effect.EffectConfigItem;

                        /**
                         * Creates a plain object from an EffectConfigItem message. Also converts values to other types if specified.
                         * @param message EffectConfigItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.effect.EffectConfigItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EffectConfigItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EffectConfigItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FileConfItem. */
                    interface IFileConfItem {

                        /** FileConfItem mp4 */
                        mp4?: (string|null);

                        /** FileConfItem mp4Md5 */
                        mp4Md5?: (string|null);

                        /** FileConfItem mp4Json */
                        mp4Json?: (string|null);

                        /** FileConfItem mp4Crc32 */
                        mp4Crc32?: (number|Long|null);

                        /** FileConfItem mp4FileSize */
                        mp4FileSize?: (number|Long|null);
                    }

                    /** Represents a FileConfItem. */
                    class FileConfItem implements IFileConfItem {

                        /**
                         * Constructs a new FileConfItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.effect.IFileConfItem);

                        /** FileConfItem mp4. */
                        public mp4: string;

                        /** FileConfItem mp4Md5. */
                        public mp4Md5: string;

                        /** FileConfItem mp4Json. */
                        public mp4Json: string;

                        /** FileConfItem mp4Crc32. */
                        public mp4Crc32: (number|Long);

                        /** FileConfItem mp4FileSize. */
                        public mp4FileSize: (number|Long);

                        /**
                         * Creates a new FileConfItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FileConfItem instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.effect.IFileConfItem): bilibili.live.component.common_model.effect.FileConfItem;

                        /**
                         * Encodes the specified FileConfItem message. Does not implicitly {@link bilibili.live.component.common_model.effect.FileConfItem.verify|verify} messages.
                         * @param message FileConfItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.effect.IFileConfItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FileConfItem message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.effect.FileConfItem.verify|verify} messages.
                         * @param message FileConfItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.effect.IFileConfItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FileConfItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FileConfItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.effect.FileConfItem;

                        /**
                         * Decodes a FileConfItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FileConfItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.effect.FileConfItem;

                        /**
                         * Verifies a FileConfItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FileConfItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FileConfItem
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.effect.FileConfItem;

                        /**
                         * Creates a plain object from a FileConfItem message. Also converts values to other types if specified.
                         * @param message FileConfItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.effect.FileConfItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FileConfItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FileConfItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a H265Conf. */
                    interface IH265Conf {

                        /** H265Conf horizontalMp4 */
                        horizontalMp4?: (bilibili.live.component.common_model.effect.IFileConfItem|null);

                        /** H265Conf verticalMp4 */
                        verticalMp4?: (bilibili.live.component.common_model.effect.IFileConfItem|null);
                    }

                    /** Represents a H265Conf. */
                    class H265Conf implements IH265Conf {

                        /**
                         * Constructs a new H265Conf.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.effect.IH265Conf);

                        /** H265Conf horizontalMp4. */
                        public horizontalMp4?: (bilibili.live.component.common_model.effect.IFileConfItem|null);

                        /** H265Conf verticalMp4. */
                        public verticalMp4?: (bilibili.live.component.common_model.effect.IFileConfItem|null);

                        /**
                         * Creates a new H265Conf instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns H265Conf instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.effect.IH265Conf): bilibili.live.component.common_model.effect.H265Conf;

                        /**
                         * Encodes the specified H265Conf message. Does not implicitly {@link bilibili.live.component.common_model.effect.H265Conf.verify|verify} messages.
                         * @param message H265Conf message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.effect.IH265Conf, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified H265Conf message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.effect.H265Conf.verify|verify} messages.
                         * @param message H265Conf message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.effect.IH265Conf, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a H265Conf message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns H265Conf
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.effect.H265Conf;

                        /**
                         * Decodes a H265Conf message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns H265Conf
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.effect.H265Conf;

                        /**
                         * Verifies a H265Conf message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a H265Conf message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns H265Conf
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.effect.H265Conf;

                        /**
                         * Creates a plain object from a H265Conf message. Also converts values to other types if specified.
                         * @param message H265Conf
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.effect.H265Conf, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this H265Conf to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for H265Conf
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Namespace fans_club. */
                namespace fans_club {

                    /** Properties of a GroupMedalBrief. */
                    interface IGroupMedalBrief {

                        /** GroupMedalBrief medalId */
                        medalId?: (number|Long|null);

                        /** GroupMedalBrief name */
                        name?: (string|null);

                        /** GroupMedalBrief isLighted */
                        isLighted?: (number|Long|null);
                    }

                    /** Represents a GroupMedalBrief. */
                    class GroupMedalBrief implements IGroupMedalBrief {

                        /**
                         * Constructs a new GroupMedalBrief.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.fans_club.IGroupMedalBrief);

                        /** GroupMedalBrief medalId. */
                        public medalId: (number|Long);

                        /** GroupMedalBrief name. */
                        public name: string;

                        /** GroupMedalBrief isLighted. */
                        public isLighted: (number|Long);

                        /**
                         * Creates a new GroupMedalBrief instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GroupMedalBrief instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.fans_club.IGroupMedalBrief): bilibili.live.component.common_model.fans_club.GroupMedalBrief;

                        /**
                         * Encodes the specified GroupMedalBrief message. Does not implicitly {@link bilibili.live.component.common_model.fans_club.GroupMedalBrief.verify|verify} messages.
                         * @param message GroupMedalBrief message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.fans_club.IGroupMedalBrief, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GroupMedalBrief message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.fans_club.GroupMedalBrief.verify|verify} messages.
                         * @param message GroupMedalBrief message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.fans_club.IGroupMedalBrief, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GroupMedalBrief message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GroupMedalBrief
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.fans_club.GroupMedalBrief;

                        /**
                         * Decodes a GroupMedalBrief message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GroupMedalBrief
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.fans_club.GroupMedalBrief;

                        /**
                         * Verifies a GroupMedalBrief message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GroupMedalBrief message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GroupMedalBrief
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.fans_club.GroupMedalBrief;

                        /**
                         * Creates a plain object from a GroupMedalBrief message. Also converts values to other types if specified.
                         * @param message GroupMedalBrief
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.fans_club.GroupMedalBrief, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GroupMedalBrief to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GroupMedalBrief
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }

                /** Namespace user_dagw. */
                namespace user_dagw {

                    /** Properties of an AccountInfo. */
                    interface IAccountInfo {

                        /** AccountInfo name */
                        name?: (string|null);

                        /** AccountInfo face */
                        face?: (string|null);
                    }

                    /** Represents an AccountInfo. */
                    class AccountInfo implements IAccountInfo {

                        /**
                         * Constructs a new AccountInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IAccountInfo);

                        /** AccountInfo name. */
                        public name: string;

                        /** AccountInfo face. */
                        public face: string;

                        /**
                         * Creates a new AccountInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccountInfo instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IAccountInfo): bilibili.live.component.common_model.user_dagw.AccountInfo;

                        /**
                         * Encodes the specified AccountInfo message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.AccountInfo.verify|verify} messages.
                         * @param message AccountInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccountInfo message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.AccountInfo.verify|verify} messages.
                         * @param message AccountInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccountInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccountInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.AccountInfo;

                        /**
                         * Decodes an AccountInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccountInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.AccountInfo;

                        /**
                         * Verifies an AccountInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccountInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccountInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.AccountInfo;

                        /**
                         * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
                         * @param message AccountInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.AccountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccountInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AccountInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Anon. */
                    interface IAnon {

                        /** Anon type */
                        type?: (bilibili.live.component.common_model.user_dagw.AnonType|null);

                        /** Anon anonUid */
                        anonUid?: (string|null);

                        /** Anon anonKeyVer */
                        anonKeyVer?: (string|null);

                        /** Anon uinfoCipher */
                        uinfoCipher?: (string|null);

                        /** Anon masked */
                        masked?: (boolean|null);
                    }

                    /** Represents an Anon. */
                    class Anon implements IAnon {

                        /**
                         * Constructs a new Anon.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IAnon);

                        /** Anon type. */
                        public type: bilibili.live.component.common_model.user_dagw.AnonType;

                        /** Anon anonUid. */
                        public anonUid: string;

                        /** Anon anonKeyVer. */
                        public anonKeyVer: string;

                        /** Anon uinfoCipher. */
                        public uinfoCipher: string;

                        /** Anon masked. */
                        public masked: boolean;

                        /**
                         * Creates a new Anon instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Anon instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IAnon): bilibili.live.component.common_model.user_dagw.Anon;

                        /**
                         * Encodes the specified Anon message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Anon.verify|verify} messages.
                         * @param message Anon message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IAnon, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Anon message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Anon.verify|verify} messages.
                         * @param message Anon message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IAnon, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Anon message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Anon
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.Anon;

                        /**
                         * Decodes an Anon message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Anon
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.Anon;

                        /**
                         * Verifies an Anon message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Anon message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Anon
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.Anon;

                        /**
                         * Creates a plain object from an Anon message. Also converts values to other types if specified.
                         * @param message Anon
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.Anon, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Anon to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Anon
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** AnonType enum. */
                    enum AnonType {
                        ANON_TYPE_NONE = 0,
                        ANON_TYPE_ROOM_ANON = 1
                    }

                    /** Properties of a Base. */
                    interface IBase {

                        /** Base name */
                        name?: (string|null);

                        /** Base face */
                        face?: (string|null);

                        /** Base nameColor */
                        nameColor?: (number|null);

                        /** Base isMystery */
                        isMystery?: (boolean|null);

                        /** Base riskCtrlInfo */
                        riskCtrlInfo?: (bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo|null);

                        /** Base originInfo */
                        originInfo?: (bilibili.live.component.common_model.user_dagw.IAccountInfo|null);

                        /** Base officialInfo */
                        officialInfo?: (bilibili.live.component.common_model.user_dagw.IOfficialInfo|null);

                        /** Base nameColorStr */
                        nameColorStr?: (string|null);
                    }

                    /** Represents a Base. */
                    class Base implements IBase {

                        /**
                         * Constructs a new Base.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IBase);

                        /** Base name. */
                        public name: string;

                        /** Base face. */
                        public face: string;

                        /** Base nameColor. */
                        public nameColor: number;

                        /** Base isMystery. */
                        public isMystery: boolean;

                        /** Base riskCtrlInfo. */
                        public riskCtrlInfo?: (bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo|null);

                        /** Base originInfo. */
                        public originInfo?: (bilibili.live.component.common_model.user_dagw.IAccountInfo|null);

                        /** Base officialInfo. */
                        public officialInfo?: (bilibili.live.component.common_model.user_dagw.IOfficialInfo|null);

                        /** Base nameColorStr. */
                        public nameColorStr: string;

                        /**
                         * Creates a new Base instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Base instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IBase): bilibili.live.component.common_model.user_dagw.Base;

                        /**
                         * Encodes the specified Base message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Base.verify|verify} messages.
                         * @param message Base message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IBase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Base message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Base.verify|verify} messages.
                         * @param message Base message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IBase, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Base message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Base
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.Base;

                        /**
                         * Decodes a Base message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Base
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.Base;

                        /**
                         * Verifies a Base message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Base message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Base
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.Base;

                        /**
                         * Creates a plain object from a Base message. Also converts values to other types if specified.
                         * @param message Base
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.Base, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Base to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Base
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BaseOption. */
                    interface IBaseOption {

                        /** BaseOption needMystery */
                        needMystery?: (boolean|null);

                        /** BaseOption riskCtrl */
                        riskCtrl?: (bilibili.live.component.common_model.user_dagw.IRiskCtrl|null);

                        /** BaseOption roomAnonCtrl */
                        roomAnonCtrl?: (bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl|null);

                        /** BaseOption riskCtrlHandles */
                        riskCtrlHandles?: (number[]|null);
                    }

                    /** Represents a BaseOption. */
                    class BaseOption implements IBaseOption {

                        /**
                         * Constructs a new BaseOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IBaseOption);

                        /** BaseOption needMystery. */
                        public needMystery: boolean;

                        /** BaseOption riskCtrl. */
                        public riskCtrl?: (bilibili.live.component.common_model.user_dagw.IRiskCtrl|null);

                        /** BaseOption roomAnonCtrl. */
                        public roomAnonCtrl?: (bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl|null);

                        /** BaseOption riskCtrlHandles. */
                        public riskCtrlHandles: number[];

                        /**
                         * Creates a new BaseOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BaseOption instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IBaseOption): bilibili.live.component.common_model.user_dagw.BaseOption;

                        /**
                         * Encodes the specified BaseOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.BaseOption.verify|verify} messages.
                         * @param message BaseOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IBaseOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BaseOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.BaseOption.verify|verify} messages.
                         * @param message BaseOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IBaseOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BaseOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BaseOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.BaseOption;

                        /**
                         * Decodes a BaseOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BaseOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.BaseOption;

                        /**
                         * Verifies a BaseOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BaseOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BaseOption
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.BaseOption;

                        /**
                         * Creates a plain object from a BaseOption message. Also converts values to other types if specified.
                         * @param message BaseOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.BaseOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BaseOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BaseOption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Guard. */
                    interface IGuard {

                        /** Guard level */
                        level?: (number|Long|null);

                        /** Guard expiredStr */
                        expiredStr?: (string|null);
                    }

                    /** Represents a Guard. */
                    class Guard implements IGuard {

                        /**
                         * Constructs a new Guard.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IGuard);

                        /** Guard level. */
                        public level: (number|Long);

                        /** Guard expiredStr. */
                        public expiredStr: string;

                        /**
                         * Creates a new Guard instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Guard instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IGuard): bilibili.live.component.common_model.user_dagw.Guard;

                        /**
                         * Encodes the specified Guard message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Guard.verify|verify} messages.
                         * @param message Guard message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IGuard, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Guard message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Guard.verify|verify} messages.
                         * @param message Guard message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IGuard, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Guard message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Guard
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.Guard;

                        /**
                         * Decodes a Guard message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Guard
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.Guard;

                        /**
                         * Verifies a Guard message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Guard message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Guard
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.Guard;

                        /**
                         * Creates a plain object from a Guard message. Also converts values to other types if specified.
                         * @param message Guard
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.Guard, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Guard to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Guard
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GuardLeader. */
                    interface IGuardLeader {

                        /** GuardLeader isGuardLeader */
                        isGuardLeader?: (boolean|null);
                    }

                    /** Represents a GuardLeader. */
                    class GuardLeader implements IGuardLeader {

                        /**
                         * Constructs a new GuardLeader.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IGuardLeader);

                        /** GuardLeader isGuardLeader. */
                        public isGuardLeader: boolean;

                        /**
                         * Creates a new GuardLeader instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GuardLeader instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IGuardLeader): bilibili.live.component.common_model.user_dagw.GuardLeader;

                        /**
                         * Encodes the specified GuardLeader message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardLeader.verify|verify} messages.
                         * @param message GuardLeader message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IGuardLeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GuardLeader message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardLeader.verify|verify} messages.
                         * @param message GuardLeader message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IGuardLeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GuardLeader message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GuardLeader
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.GuardLeader;

                        /**
                         * Decodes a GuardLeader message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GuardLeader
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.GuardLeader;

                        /**
                         * Verifies a GuardLeader message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GuardLeader message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GuardLeader
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.GuardLeader;

                        /**
                         * Creates a plain object from a GuardLeader message. Also converts values to other types if specified.
                         * @param message GuardLeader
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.GuardLeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GuardLeader to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GuardLeader
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GuardLeaderOption. */
                    interface IGuardLeaderOption {

                        /** GuardLeaderOption ruid */
                        ruid?: (number|Long|null);

                        /** GuardLeaderOption roomId */
                        roomId?: (number|Long|null);
                    }

                    /** Represents a GuardLeaderOption. */
                    class GuardLeaderOption implements IGuardLeaderOption {

                        /**
                         * Constructs a new GuardLeaderOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IGuardLeaderOption);

                        /** GuardLeaderOption ruid. */
                        public ruid: (number|Long);

                        /** GuardLeaderOption roomId. */
                        public roomId: (number|Long);

                        /**
                         * Creates a new GuardLeaderOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GuardLeaderOption instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IGuardLeaderOption): bilibili.live.component.common_model.user_dagw.GuardLeaderOption;

                        /**
                         * Encodes the specified GuardLeaderOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardLeaderOption.verify|verify} messages.
                         * @param message GuardLeaderOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IGuardLeaderOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GuardLeaderOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardLeaderOption.verify|verify} messages.
                         * @param message GuardLeaderOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IGuardLeaderOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GuardLeaderOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GuardLeaderOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.GuardLeaderOption;

                        /**
                         * Decodes a GuardLeaderOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GuardLeaderOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.GuardLeaderOption;

                        /**
                         * Verifies a GuardLeaderOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GuardLeaderOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GuardLeaderOption
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.GuardLeaderOption;

                        /**
                         * Creates a plain object from a GuardLeaderOption message. Also converts values to other types if specified.
                         * @param message GuardLeaderOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.GuardLeaderOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GuardLeaderOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GuardLeaderOption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GuardOption. */
                    interface IGuardOption {

                        /** GuardOption ruid */
                        ruid?: (number|Long|null);

                        /** GuardOption useLocalCache */
                        useLocalCache?: (boolean|null);

                        /** GuardOption strongDepend */
                        strongDepend?: (boolean|null);
                    }

                    /** Represents a GuardOption. */
                    class GuardOption implements IGuardOption {

                        /**
                         * Constructs a new GuardOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IGuardOption);

                        /** GuardOption ruid. */
                        public ruid: (number|Long);

                        /** GuardOption useLocalCache. */
                        public useLocalCache: boolean;

                        /** GuardOption strongDepend. */
                        public strongDepend: boolean;

                        /**
                         * Creates a new GuardOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GuardOption instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IGuardOption): bilibili.live.component.common_model.user_dagw.GuardOption;

                        /**
                         * Encodes the specified GuardOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardOption.verify|verify} messages.
                         * @param message GuardOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IGuardOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GuardOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.GuardOption.verify|verify} messages.
                         * @param message GuardOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IGuardOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GuardOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GuardOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.GuardOption;

                        /**
                         * Decodes a GuardOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GuardOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.GuardOption;

                        /**
                         * Verifies a GuardOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GuardOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GuardOption
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.GuardOption;

                        /**
                         * Creates a plain object from a GuardOption message. Also converts values to other types if specified.
                         * @param message GuardOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.GuardOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GuardOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GuardOption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** HaveMedalType enum. */
                    enum HaveMedalType {
                        Medal_Common = 0,
                        Medal_Group = 1
                    }

                    /** Properties of a Medal. */
                    interface IMedal {

                        /** Medal name */
                        name?: (string|null);

                        /** Medal level */
                        level?: (number|Long|null);

                        /** Medal colorStart */
                        colorStart?: (number|Long|null);

                        /** Medal colorEnd */
                        colorEnd?: (number|Long|null);

                        /** Medal colorBorder */
                        colorBorder?: (number|Long|null);

                        /** Medal color */
                        color?: (number|Long|null);

                        /** Medal id */
                        id?: (number|Long|null);

                        /** Medal typ */
                        typ?: (bilibili.live.component.common_model.user_dagw.HaveMedalType|null);

                        /** Medal isLight */
                        isLight?: (number|Long|null);

                        /** Medal ruid */
                        ruid?: (number|Long|null);

                        /** Medal guardLevel */
                        guardLevel?: (number|Long|null);

                        /** Medal score */
                        score?: (number|Long|null);

                        /** Medal guardIcon */
                        guardIcon?: (string|null);

                        /** Medal honorIcon */
                        honorIcon?: (string|null);

                        /** Medal v2MedalColorStart */
                        v2MedalColorStart?: (string|null);

                        /** Medal v2MedalColorEnd */
                        v2MedalColorEnd?: (string|null);

                        /** Medal v2MedalColorBorder */
                        v2MedalColorBorder?: (string|null);

                        /** Medal v2MedalColorText */
                        v2MedalColorText?: (string|null);

                        /** Medal v2MedalColorLevel */
                        v2MedalColorLevel?: (string|null);

                        /** Medal userReceiveCount */
                        userReceiveCount?: (number|Long|null);
                    }

                    /** Represents a Medal. */
                    class Medal implements IMedal {

                        /**
                         * Constructs a new Medal.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IMedal);

                        /** Medal name. */
                        public name: string;

                        /** Medal level. */
                        public level: (number|Long);

                        /** Medal colorStart. */
                        public colorStart: (number|Long);

                        /** Medal colorEnd. */
                        public colorEnd: (number|Long);

                        /** Medal colorBorder. */
                        public colorBorder: (number|Long);

                        /** Medal color. */
                        public color: (number|Long);

                        /** Medal id. */
                        public id: (number|Long);

                        /** Medal typ. */
                        public typ: bilibili.live.component.common_model.user_dagw.HaveMedalType;

                        /** Medal isLight. */
                        public isLight: (number|Long);

                        /** Medal ruid. */
                        public ruid: (number|Long);

                        /** Medal guardLevel. */
                        public guardLevel: (number|Long);

                        /** Medal score. */
                        public score: (number|Long);

                        /** Medal guardIcon. */
                        public guardIcon: string;

                        /** Medal honorIcon. */
                        public honorIcon: string;

                        /** Medal v2MedalColorStart. */
                        public v2MedalColorStart: string;

                        /** Medal v2MedalColorEnd. */
                        public v2MedalColorEnd: string;

                        /** Medal v2MedalColorBorder. */
                        public v2MedalColorBorder: string;

                        /** Medal v2MedalColorText. */
                        public v2MedalColorText: string;

                        /** Medal v2MedalColorLevel. */
                        public v2MedalColorLevel: string;

                        /** Medal userReceiveCount. */
                        public userReceiveCount: (number|Long);

                        /**
                         * Creates a new Medal instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Medal instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IMedal): bilibili.live.component.common_model.user_dagw.Medal;

                        /**
                         * Encodes the specified Medal message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Medal.verify|verify} messages.
                         * @param message Medal message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IMedal, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Medal message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Medal.verify|verify} messages.
                         * @param message Medal message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IMedal, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Medal message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Medal
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.Medal;

                        /**
                         * Decodes a Medal message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Medal
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.Medal;

                        /**
                         * Verifies a Medal message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Medal message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Medal
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.Medal;

                        /**
                         * Creates a plain object from a Medal message. Also converts values to other types if specified.
                         * @param message Medal
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.Medal, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Medal to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Medal
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MedalOption. */
                    interface IMedalOption {

                        /** MedalOption typ */
                        typ?: (bilibili.live.component.common_model.user_dagw.MedalType|null);

                        /** MedalOption ruid */
                        ruid?: (number|Long|null);

                        /** MedalOption needGuard */
                        needGuard?: (boolean|null);

                        /** MedalOption strongDepend */
                        strongDepend?: (boolean|null);

                        /** MedalOption needGroup */
                        needGroup?: (boolean|null);
                    }

                    /** Represents a MedalOption. */
                    class MedalOption implements IMedalOption {

                        /**
                         * Constructs a new MedalOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IMedalOption);

                        /** MedalOption typ. */
                        public typ: bilibili.live.component.common_model.user_dagw.MedalType;

                        /** MedalOption ruid. */
                        public ruid: (number|Long);

                        /** MedalOption needGuard. */
                        public needGuard: boolean;

                        /** MedalOption strongDepend. */
                        public strongDepend: boolean;

                        /** MedalOption needGroup. */
                        public needGroup: boolean;

                        /**
                         * Creates a new MedalOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MedalOption instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IMedalOption): bilibili.live.component.common_model.user_dagw.MedalOption;

                        /**
                         * Encodes the specified MedalOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.MedalOption.verify|verify} messages.
                         * @param message MedalOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IMedalOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MedalOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.MedalOption.verify|verify} messages.
                         * @param message MedalOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IMedalOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MedalOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MedalOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.MedalOption;

                        /**
                         * Decodes a MedalOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MedalOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.MedalOption;

                        /**
                         * Verifies a MedalOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MedalOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MedalOption
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.MedalOption;

                        /**
                         * Creates a plain object from a MedalOption message. Also converts values to other types if specified.
                         * @param message MedalOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.MedalOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MedalOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MedalOption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** MedalType enum. */
                    enum MedalType {
                        Medal_Wear = 0,
                        Medal_Spec = 1
                    }

                    /** Properties of an OfficialInfo. */
                    interface IOfficialInfo {

                        /** OfficialInfo role */
                        role?: (number|Long|null);

                        /** OfficialInfo title */
                        title?: (string|null);

                        /** OfficialInfo desc */
                        desc?: (string|null);

                        /** OfficialInfo type */
                        type?: (number|Long|null);
                    }

                    /** Represents an OfficialInfo. */
                    class OfficialInfo implements IOfficialInfo {

                        /**
                         * Constructs a new OfficialInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IOfficialInfo);

                        /** OfficialInfo role. */
                        public role: (number|Long);

                        /** OfficialInfo title. */
                        public title: string;

                        /** OfficialInfo desc. */
                        public desc: string;

                        /** OfficialInfo type. */
                        public type: (number|Long);

                        /**
                         * Creates a new OfficialInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns OfficialInfo instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IOfficialInfo): bilibili.live.component.common_model.user_dagw.OfficialInfo;

                        /**
                         * Encodes the specified OfficialInfo message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.OfficialInfo.verify|verify} messages.
                         * @param message OfficialInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IOfficialInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified OfficialInfo message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.OfficialInfo.verify|verify} messages.
                         * @param message OfficialInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IOfficialInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an OfficialInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns OfficialInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.OfficialInfo;

                        /**
                         * Decodes an OfficialInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns OfficialInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.OfficialInfo;

                        /**
                         * Verifies an OfficialInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an OfficialInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns OfficialInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.OfficialInfo;

                        /**
                         * Creates a plain object from an OfficialInfo message. Also converts values to other types if specified.
                         * @param message OfficialInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.OfficialInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this OfficialInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for OfficialInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RiskCtrl. */
                    interface IRiskCtrl {

                        /** RiskCtrl roomId */
                        roomId?: (number|Long|null);

                        /** RiskCtrl policy */
                        policy?: (bilibili.live.component.common_model.user_dagw.RiskPolicyEnum|null);
                    }

                    /** Represents a RiskCtrl. */
                    class RiskCtrl implements IRiskCtrl {

                        /**
                         * Constructs a new RiskCtrl.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IRiskCtrl);

                        /** RiskCtrl roomId. */
                        public roomId: (number|Long);

                        /** RiskCtrl policy. */
                        public policy: bilibili.live.component.common_model.user_dagw.RiskPolicyEnum;

                        /**
                         * Creates a new RiskCtrl instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RiskCtrl instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IRiskCtrl): bilibili.live.component.common_model.user_dagw.RiskCtrl;

                        /**
                         * Encodes the specified RiskCtrl message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RiskCtrl.verify|verify} messages.
                         * @param message RiskCtrl message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IRiskCtrl, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RiskCtrl message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RiskCtrl.verify|verify} messages.
                         * @param message RiskCtrl message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IRiskCtrl, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RiskCtrl message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RiskCtrl
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.RiskCtrl;

                        /**
                         * Decodes a RiskCtrl message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RiskCtrl
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.RiskCtrl;

                        /**
                         * Verifies a RiskCtrl message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RiskCtrl message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RiskCtrl
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.RiskCtrl;

                        /**
                         * Creates a plain object from a RiskCtrl message. Also converts values to other types if specified.
                         * @param message RiskCtrl
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.RiskCtrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RiskCtrl to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RiskCtrl
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a RiskCtrlInfo. */
                    interface IRiskCtrlInfo {

                        /** RiskCtrlInfo name */
                        name?: (string|null);

                        /** RiskCtrlInfo face */
                        face?: (string|null);
                    }

                    /** Represents a RiskCtrlInfo. */
                    class RiskCtrlInfo implements IRiskCtrlInfo {

                        /**
                         * Constructs a new RiskCtrlInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo);

                        /** RiskCtrlInfo name. */
                        public name: string;

                        /** RiskCtrlInfo face. */
                        public face: string;

                        /**
                         * Creates a new RiskCtrlInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RiskCtrlInfo instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo): bilibili.live.component.common_model.user_dagw.RiskCtrlInfo;

                        /**
                         * Encodes the specified RiskCtrlInfo message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.verify|verify} messages.
                         * @param message RiskCtrlInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RiskCtrlInfo message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RiskCtrlInfo.verify|verify} messages.
                         * @param message RiskCtrlInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IRiskCtrlInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RiskCtrlInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RiskCtrlInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.RiskCtrlInfo;

                        /**
                         * Decodes a RiskCtrlInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RiskCtrlInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.RiskCtrlInfo;

                        /**
                         * Verifies a RiskCtrlInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RiskCtrlInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RiskCtrlInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.RiskCtrlInfo;

                        /**
                         * Creates a plain object from a RiskCtrlInfo message. Also converts values to other types if specified.
                         * @param message RiskCtrlInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.RiskCtrlInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RiskCtrlInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RiskCtrlInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RiskPolicyEnum enum. */
                    enum RiskPolicyEnum {
                        RP_NORMAL = 0,
                        RP_POLICY = 1,
                        RP_SILENCE = 2,
                        RP_CNY = 3,
                        RP_BIGEV = 4
                    }

                    /** Properties of a RoomAnonCtrl. */
                    interface IRoomAnonCtrl {

                        /** RoomAnonCtrl type */
                        type?: (bilibili.live.component.common_model.user_dagw.RoomAnonTypeEnum|null);
                    }

                    /** Represents a RoomAnonCtrl. */
                    class RoomAnonCtrl implements IRoomAnonCtrl {

                        /**
                         * Constructs a new RoomAnonCtrl.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl);

                        /** RoomAnonCtrl type. */
                        public type: bilibili.live.component.common_model.user_dagw.RoomAnonTypeEnum;

                        /**
                         * Creates a new RoomAnonCtrl instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RoomAnonCtrl instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl): bilibili.live.component.common_model.user_dagw.RoomAnonCtrl;

                        /**
                         * Encodes the specified RoomAnonCtrl message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.verify|verify} messages.
                         * @param message RoomAnonCtrl message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RoomAnonCtrl message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.RoomAnonCtrl.verify|verify} messages.
                         * @param message RoomAnonCtrl message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IRoomAnonCtrl, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RoomAnonCtrl message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RoomAnonCtrl
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.RoomAnonCtrl;

                        /**
                         * Decodes a RoomAnonCtrl message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RoomAnonCtrl
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.RoomAnonCtrl;

                        /**
                         * Verifies a RoomAnonCtrl message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RoomAnonCtrl message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RoomAnonCtrl
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.RoomAnonCtrl;

                        /**
                         * Creates a plain object from a RoomAnonCtrl message. Also converts values to other types if specified.
                         * @param message RoomAnonCtrl
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.RoomAnonCtrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RoomAnonCtrl to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for RoomAnonCtrl
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** RoomAnonTypeEnum enum. */
                    enum RoomAnonTypeEnum {
                        RA_ALL = 0,
                        RA_With_Subject = 1,
                        RA_Identity_Only = 2
                    }

                    /** Properties of a Title. */
                    interface ITitle {

                        /** Title oldTitleCssId */
                        oldTitleCssId?: (string|null);

                        /** Title titleCssId */
                        titleCssId?: (string|null);
                    }

                    /** Represents a Title. */
                    class Title implements ITitle {

                        /**
                         * Constructs a new Title.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.ITitle);

                        /** Title oldTitleCssId. */
                        public oldTitleCssId: string;

                        /** Title titleCssId. */
                        public titleCssId: string;

                        /**
                         * Creates a new Title instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Title instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.ITitle): bilibili.live.component.common_model.user_dagw.Title;

                        /**
                         * Encodes the specified Title message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Title.verify|verify} messages.
                         * @param message Title message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.ITitle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Title message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Title.verify|verify} messages.
                         * @param message Title message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.ITitle, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Title message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Title
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.Title;

                        /**
                         * Decodes a Title message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Title
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.Title;

                        /**
                         * Verifies a Title message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Title message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Title
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.Title;

                        /**
                         * Creates a plain object from a Title message. Also converts values to other types if specified.
                         * @param message Title
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.Title, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Title to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Title
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a TitleOption. */
                    interface ITitleOption {

                        /** TitleOption roomId */
                        roomId?: (number|Long|null);

                        /** TitleOption strongDepend */
                        strongDepend?: (boolean|null);
                    }

                    /** Represents a TitleOption. */
                    class TitleOption implements ITitleOption {

                        /**
                         * Constructs a new TitleOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.ITitleOption);

                        /** TitleOption roomId. */
                        public roomId: (number|Long);

                        /** TitleOption strongDepend. */
                        public strongDepend: boolean;

                        /**
                         * Creates a new TitleOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TitleOption instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.ITitleOption): bilibili.live.component.common_model.user_dagw.TitleOption;

                        /**
                         * Encodes the specified TitleOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.TitleOption.verify|verify} messages.
                         * @param message TitleOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.ITitleOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TitleOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.TitleOption.verify|verify} messages.
                         * @param message TitleOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.ITitleOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TitleOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TitleOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.TitleOption;

                        /**
                         * Decodes a TitleOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TitleOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.TitleOption;

                        /**
                         * Verifies a TitleOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TitleOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TitleOption
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.TitleOption;

                        /**
                         * Creates a plain object from a TitleOption message. Also converts values to other types if specified.
                         * @param message TitleOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.TitleOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TitleOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TitleOption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserHeadFrame. */
                    interface IUserHeadFrame {

                        /** UserHeadFrame id */
                        id?: (number|Long|null);

                        /** UserHeadFrame frameImg */
                        frameImg?: (string|null);
                    }

                    /** Represents a UserHeadFrame. */
                    class UserHeadFrame implements IUserHeadFrame {

                        /**
                         * Constructs a new UserHeadFrame.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IUserHeadFrame);

                        /** UserHeadFrame id. */
                        public id: (number|Long);

                        /** UserHeadFrame frameImg. */
                        public frameImg: string;

                        /**
                         * Creates a new UserHeadFrame instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserHeadFrame instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IUserHeadFrame): bilibili.live.component.common_model.user_dagw.UserHeadFrame;

                        /**
                         * Encodes the specified UserHeadFrame message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.UserHeadFrame.verify|verify} messages.
                         * @param message UserHeadFrame message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IUserHeadFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UserHeadFrame message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.UserHeadFrame.verify|verify} messages.
                         * @param message UserHeadFrame message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IUserHeadFrame, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UserHeadFrame message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserHeadFrame
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.UserHeadFrame;

                        /**
                         * Decodes a UserHeadFrame message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UserHeadFrame
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.UserHeadFrame;

                        /**
                         * Verifies a UserHeadFrame message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a UserHeadFrame message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserHeadFrame
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.UserHeadFrame;

                        /**
                         * Creates a plain object from a UserHeadFrame message. Also converts values to other types if specified.
                         * @param message UserHeadFrame
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.UserHeadFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UserHeadFrame to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UserHeadFrame
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserInfo. */
                    interface IUserInfo {

                        /** UserInfo uid */
                        uid?: (number|Long|null);

                        /** UserInfo base */
                        base?: (bilibili.live.component.common_model.user_dagw.IBase|null);

                        /** UserInfo medal */
                        medal?: (bilibili.live.component.common_model.user_dagw.IMedal|null);

                        /** UserInfo wealth */
                        wealth?: (bilibili.live.component.common_model.user_dagw.IWealth|null);

                        /** UserInfo title */
                        title?: (bilibili.live.component.common_model.user_dagw.ITitle|null);

                        /** UserInfo guard */
                        guard?: (bilibili.live.component.common_model.user_dagw.IGuard|null);

                        /** UserInfo uheadFrame */
                        uheadFrame?: (bilibili.live.component.common_model.user_dagw.IUserHeadFrame|null);

                        /** UserInfo guardLeader */
                        guardLeader?: (bilibili.live.component.common_model.user_dagw.IGuardLeader|null);

                        /** UserInfo anon */
                        anon?: (bilibili.live.component.common_model.user_dagw.IAnon|null);
                    }

                    /** Represents a UserInfo. */
                    class UserInfo implements IUserInfo {

                        /**
                         * Constructs a new UserInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IUserInfo);

                        /** UserInfo uid. */
                        public uid: (number|Long);

                        /** UserInfo base. */
                        public base?: (bilibili.live.component.common_model.user_dagw.IBase|null);

                        /** UserInfo medal. */
                        public medal?: (bilibili.live.component.common_model.user_dagw.IMedal|null);

                        /** UserInfo wealth. */
                        public wealth?: (bilibili.live.component.common_model.user_dagw.IWealth|null);

                        /** UserInfo title. */
                        public title?: (bilibili.live.component.common_model.user_dagw.ITitle|null);

                        /** UserInfo guard. */
                        public guard?: (bilibili.live.component.common_model.user_dagw.IGuard|null);

                        /** UserInfo uheadFrame. */
                        public uheadFrame?: (bilibili.live.component.common_model.user_dagw.IUserHeadFrame|null);

                        /** UserInfo guardLeader. */
                        public guardLeader?: (bilibili.live.component.common_model.user_dagw.IGuardLeader|null);

                        /** UserInfo anon. */
                        public anon?: (bilibili.live.component.common_model.user_dagw.IAnon|null);

                        /**
                         * Creates a new UserInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserInfo instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IUserInfo): bilibili.live.component.common_model.user_dagw.UserInfo;

                        /**
                         * Encodes the specified UserInfo message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.UserInfo.verify|verify} messages.
                         * @param message UserInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.UserInfo.verify|verify} messages.
                         * @param message UserInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UserInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.UserInfo;

                        /**
                         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.UserInfo;

                        /**
                         * Verifies a UserInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.UserInfo;

                        /**
                         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
                         * @param message UserInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UserInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UserInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a Wealth. */
                    interface IWealth {

                        /** Wealth level */
                        level?: (number|Long|null);

                        /** Wealth dmIconKey */
                        dmIconKey?: (string|null);
                    }

                    /** Represents a Wealth. */
                    class Wealth implements IWealth {

                        /**
                         * Constructs a new Wealth.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IWealth);

                        /** Wealth level. */
                        public level: (number|Long);

                        /** Wealth dmIconKey. */
                        public dmIconKey: string;

                        /**
                         * Creates a new Wealth instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Wealth instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IWealth): bilibili.live.component.common_model.user_dagw.Wealth;

                        /**
                         * Encodes the specified Wealth message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Wealth.verify|verify} messages.
                         * @param message Wealth message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IWealth, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Wealth message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.Wealth.verify|verify} messages.
                         * @param message Wealth message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IWealth, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Wealth message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Wealth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.Wealth;

                        /**
                         * Decodes a Wealth message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Wealth
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.Wealth;

                        /**
                         * Verifies a Wealth message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Wealth message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Wealth
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.Wealth;

                        /**
                         * Creates a plain object from a Wealth message. Also converts values to other types if specified.
                         * @param message Wealth
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.Wealth, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Wealth to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Wealth
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a WealthOption. */
                    interface IWealthOption {

                        /** WealthOption roomid */
                        roomid?: (number|Long|null);

                        /** WealthOption viewUid */
                        viewUid?: (number|Long|null);

                        /** WealthOption ruid */
                        ruid?: (number|Long|null);

                        /** WealthOption strongDepend */
                        strongDepend?: (boolean|null);
                    }

                    /** Represents a WealthOption. */
                    class WealthOption implements IWealthOption {

                        /**
                         * Constructs a new WealthOption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.component.common_model.user_dagw.IWealthOption);

                        /** WealthOption roomid. */
                        public roomid: (number|Long);

                        /** WealthOption viewUid. */
                        public viewUid: (number|Long);

                        /** WealthOption ruid. */
                        public ruid: (number|Long);

                        /** WealthOption strongDepend. */
                        public strongDepend: boolean;

                        /**
                         * Creates a new WealthOption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WealthOption instance
                         */
                        public static create(properties?: bilibili.live.component.common_model.user_dagw.IWealthOption): bilibili.live.component.common_model.user_dagw.WealthOption;

                        /**
                         * Encodes the specified WealthOption message. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.WealthOption.verify|verify} messages.
                         * @param message WealthOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.component.common_model.user_dagw.IWealthOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WealthOption message, length delimited. Does not implicitly {@link bilibili.live.component.common_model.user_dagw.WealthOption.verify|verify} messages.
                         * @param message WealthOption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.component.common_model.user_dagw.IWealthOption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WealthOption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WealthOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.component.common_model.user_dagw.WealthOption;

                        /**
                         * Decodes a WealthOption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WealthOption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.component.common_model.user_dagw.WealthOption;

                        /**
                         * Verifies a WealthOption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WealthOption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WealthOption
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.component.common_model.user_dagw.WealthOption;

                        /**
                         * Creates a plain object from a WealthOption message. Also converts values to other types if specified.
                         * @param message WealthOption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.component.common_model.user_dagw.WealthOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WealthOption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WealthOption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }

        /** Namespace gift. */
        namespace gift {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an EasterEggBenefit. */
                interface IEasterEggBenefit {

                    /** EasterEggBenefit materialUrl */
                    materialUrl?: (string|null);

                    /** EasterEggBenefit materialMd5 */
                    materialMd5?: (string|null);

                    /** EasterEggBenefit effectNum */
                    effectNum?: (number|Long|null);

                    /** EasterEggBenefit effectNumAudience */
                    effectNumAudience?: (number|Long|null);

                    /** EasterEggBenefit unlockText */
                    unlockText?: (string|null);

                    /** EasterEggBenefit webMaterialUrl */
                    webMaterialUrl?: (string|null);

                    /** EasterEggBenefit webMaterialMd5 */
                    webMaterialMd5?: (string|null);
                }

                /** Represents an EasterEggBenefit. */
                class EasterEggBenefit implements IEasterEggBenefit {

                    /**
                     * Constructs a new EasterEggBenefit.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: bilibili.live.gift.v1.IEasterEggBenefit);

                    /** EasterEggBenefit materialUrl. */
                    public materialUrl: string;

                    /** EasterEggBenefit materialMd5. */
                    public materialMd5: string;

                    /** EasterEggBenefit effectNum. */
                    public effectNum: (number|Long);

                    /** EasterEggBenefit effectNumAudience. */
                    public effectNumAudience: (number|Long);

                    /** EasterEggBenefit unlockText. */
                    public unlockText: string;

                    /** EasterEggBenefit webMaterialUrl. */
                    public webMaterialUrl: string;

                    /** EasterEggBenefit webMaterialMd5. */
                    public webMaterialMd5: string;

                    /**
                     * Creates a new EasterEggBenefit instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns EasterEggBenefit instance
                     */
                    public static create(properties?: bilibili.live.gift.v1.IEasterEggBenefit): bilibili.live.gift.v1.EasterEggBenefit;

                    /**
                     * Encodes the specified EasterEggBenefit message. Does not implicitly {@link bilibili.live.gift.v1.EasterEggBenefit.verify|verify} messages.
                     * @param message EasterEggBenefit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: bilibili.live.gift.v1.IEasterEggBenefit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified EasterEggBenefit message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.EasterEggBenefit.verify|verify} messages.
                     * @param message EasterEggBenefit message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: bilibili.live.gift.v1.IEasterEggBenefit, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an EasterEggBenefit message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns EasterEggBenefit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.EasterEggBenefit;

                    /**
                     * Decodes an EasterEggBenefit message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns EasterEggBenefit
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.EasterEggBenefit;

                    /**
                     * Verifies an EasterEggBenefit message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an EasterEggBenefit message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns EasterEggBenefit
                     */
                    public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.EasterEggBenefit;

                    /**
                     * Creates a plain object from an EasterEggBenefit message. Also converts values to other types if specified.
                     * @param message EasterEggBenefit
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: bilibili.live.gift.v1.EasterEggBenefit, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this EasterEggBenefit to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for EasterEggBenefit
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a FansLightAnimation. */
                interface IFansLightAnimation {

                    /** FansLightAnimation medalName */
                    medalName?: (string|null);
                }

                /** Represents a FansLightAnimation. */
                class FansLightAnimation implements IFansLightAnimation {

                    /**
                     * Constructs a new FansLightAnimation.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: bilibili.live.gift.v1.IFansLightAnimation);

                    /** FansLightAnimation medalName. */
                    public medalName: string;

                    /**
                     * Creates a new FansLightAnimation instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FansLightAnimation instance
                     */
                    public static create(properties?: bilibili.live.gift.v1.IFansLightAnimation): bilibili.live.gift.v1.FansLightAnimation;

                    /**
                     * Encodes the specified FansLightAnimation message. Does not implicitly {@link bilibili.live.gift.v1.FansLightAnimation.verify|verify} messages.
                     * @param message FansLightAnimation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: bilibili.live.gift.v1.IFansLightAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FansLightAnimation message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.FansLightAnimation.verify|verify} messages.
                     * @param message FansLightAnimation message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: bilibili.live.gift.v1.IFansLightAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FansLightAnimation message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FansLightAnimation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.FansLightAnimation;

                    /**
                     * Decodes a FansLightAnimation message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FansLightAnimation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.FansLightAnimation;

                    /**
                     * Verifies a FansLightAnimation message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FansLightAnimation message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FansLightAnimation
                     */
                    public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.FansLightAnimation;

                    /**
                     * Creates a plain object from a FansLightAnimation message. Also converts values to other types if specified.
                     * @param message FansLightAnimation
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: bilibili.live.gift.v1.FansLightAnimation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FansLightAnimation to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for FansLightAnimation
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GiftBenefits. */
                interface IGiftBenefits {

                    /** GiftBenefits easterEgg */
                    easterEgg?: (bilibili.live.gift.v1.IEasterEggBenefit|null);

                    /** GiftBenefits fansLightAnimation */
                    fansLightAnimation?: (bilibili.live.gift.v1.IFansLightAnimation|null);
                }

                /** Represents a GiftBenefits. */
                class GiftBenefits implements IGiftBenefits {

                    /**
                     * Constructs a new GiftBenefits.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: bilibili.live.gift.v1.IGiftBenefits);

                    /** GiftBenefits easterEgg. */
                    public easterEgg?: (bilibili.live.gift.v1.IEasterEggBenefit|null);

                    /** GiftBenefits fansLightAnimation. */
                    public fansLightAnimation?: (bilibili.live.gift.v1.IFansLightAnimation|null);

                    /**
                     * Creates a new GiftBenefits instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GiftBenefits instance
                     */
                    public static create(properties?: bilibili.live.gift.v1.IGiftBenefits): bilibili.live.gift.v1.GiftBenefits;

                    /**
                     * Encodes the specified GiftBenefits message. Does not implicitly {@link bilibili.live.gift.v1.GiftBenefits.verify|verify} messages.
                     * @param message GiftBenefits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: bilibili.live.gift.v1.IGiftBenefits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GiftBenefits message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.GiftBenefits.verify|verify} messages.
                     * @param message GiftBenefits message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: bilibili.live.gift.v1.IGiftBenefits, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GiftBenefits message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GiftBenefits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.GiftBenefits;

                    /**
                     * Decodes a GiftBenefits message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GiftBenefits
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.GiftBenefits;

                    /**
                     * Verifies a GiftBenefits message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GiftBenefits message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GiftBenefits
                     */
                    public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.GiftBenefits;

                    /**
                     * Creates a plain object from a GiftBenefits message. Also converts values to other types if specified.
                     * @param message GiftBenefits
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: bilibili.live.gift.v1.GiftBenefits, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GiftBenefits to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GiftBenefits
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GiftMaterialSnapShot. */
                interface IGiftMaterialSnapShot {

                    /** GiftMaterialSnapShot imgBasic */
                    imgBasic?: (string|null);

                    /** GiftMaterialSnapShot webp */
                    webp?: (string|null);

                    /** GiftMaterialSnapShot effectId */
                    effectId?: (number|Long|null);

                    /** GiftMaterialSnapShot hasImagedGift */
                    hasImagedGift?: (number|Long|null);

                    /** GiftMaterialSnapShot gif */
                    gif?: (string|null);
                }

                /** Represents a GiftMaterialSnapShot. */
                class GiftMaterialSnapShot implements IGiftMaterialSnapShot {

                    /**
                     * Constructs a new GiftMaterialSnapShot.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: bilibili.live.gift.v1.IGiftMaterialSnapShot);

                    /** GiftMaterialSnapShot imgBasic. */
                    public imgBasic: string;

                    /** GiftMaterialSnapShot webp. */
                    public webp: string;

                    /** GiftMaterialSnapShot effectId. */
                    public effectId: (number|Long);

                    /** GiftMaterialSnapShot hasImagedGift. */
                    public hasImagedGift: (number|Long);

                    /** GiftMaterialSnapShot gif. */
                    public gif: string;

                    /**
                     * Creates a new GiftMaterialSnapShot instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GiftMaterialSnapShot instance
                     */
                    public static create(properties?: bilibili.live.gift.v1.IGiftMaterialSnapShot): bilibili.live.gift.v1.GiftMaterialSnapShot;

                    /**
                     * Encodes the specified GiftMaterialSnapShot message. Does not implicitly {@link bilibili.live.gift.v1.GiftMaterialSnapShot.verify|verify} messages.
                     * @param message GiftMaterialSnapShot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: bilibili.live.gift.v1.IGiftMaterialSnapShot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GiftMaterialSnapShot message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.GiftMaterialSnapShot.verify|verify} messages.
                     * @param message GiftMaterialSnapShot message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: bilibili.live.gift.v1.IGiftMaterialSnapShot, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GiftMaterialSnapShot message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GiftMaterialSnapShot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.GiftMaterialSnapShot;

                    /**
                     * Decodes a GiftMaterialSnapShot message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GiftMaterialSnapShot
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.GiftMaterialSnapShot;

                    /**
                     * Verifies a GiftMaterialSnapShot message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GiftMaterialSnapShot message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GiftMaterialSnapShot
                     */
                    public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.GiftMaterialSnapShot;

                    /**
                     * Creates a plain object from a GiftMaterialSnapShot message. Also converts values to other types if specified.
                     * @param message GiftMaterialSnapShot
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: bilibili.live.gift.v1.GiftMaterialSnapShot, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GiftMaterialSnapShot to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GiftMaterialSnapShot
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a GroupMedalBrief. */
                interface IGroupMedalBrief {

                    /** GroupMedalBrief medalId */
                    medalId?: (number|Long|null);

                    /** GroupMedalBrief name */
                    name?: (string|null);

                    /** GroupMedalBrief isLighted */
                    isLighted?: (number|Long|null);
                }

                /** Represents a GroupMedalBrief. */
                class GroupMedalBrief implements IGroupMedalBrief {

                    /**
                     * Constructs a new GroupMedalBrief.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: bilibili.live.gift.v1.IGroupMedalBrief);

                    /** GroupMedalBrief medalId. */
                    public medalId: (number|Long);

                    /** GroupMedalBrief name. */
                    public name: string;

                    /** GroupMedalBrief isLighted. */
                    public isLighted: (number|Long);

                    /**
                     * Creates a new GroupMedalBrief instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupMedalBrief instance
                     */
                    public static create(properties?: bilibili.live.gift.v1.IGroupMedalBrief): bilibili.live.gift.v1.GroupMedalBrief;

                    /**
                     * Encodes the specified GroupMedalBrief message. Does not implicitly {@link bilibili.live.gift.v1.GroupMedalBrief.verify|verify} messages.
                     * @param message GroupMedalBrief message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: bilibili.live.gift.v1.IGroupMedalBrief, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupMedalBrief message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.GroupMedalBrief.verify|verify} messages.
                     * @param message GroupMedalBrief message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: bilibili.live.gift.v1.IGroupMedalBrief, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupMedalBrief message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupMedalBrief
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.GroupMedalBrief;

                    /**
                     * Decodes a GroupMedalBrief message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupMedalBrief
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.GroupMedalBrief;

                    /**
                     * Verifies a GroupMedalBrief message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupMedalBrief message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupMedalBrief
                     */
                    public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.GroupMedalBrief;

                    /**
                     * Creates a plain object from a GroupMedalBrief message. Also converts values to other types if specified.
                     * @param message GroupMedalBrief
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: bilibili.live.gift.v1.GroupMedalBrief, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupMedalBrief to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GroupMedalBrief
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a SendGiftBroadcast. */
                interface ISendGiftBroadcast {

                    /** SendGiftBroadcast uid */
                    uid?: (number|Long|null);

                    /** SendGiftBroadcast uname */
                    uname?: (string|null);

                    /** SendGiftBroadcast face */
                    face?: (string|null);

                    /** SendGiftBroadcast nameColor */
                    nameColor?: (string|null);

                    /** SendGiftBroadcast guardLevel */
                    guardLevel?: (number|Long|null);

                    /** SendGiftBroadcast svgaBlock */
                    svgaBlock?: (number|Long|null);

                    /** SendGiftBroadcast sendMaster */
                    sendMaster?: (bilibili.live.gift.v1.SendGiftBroadcast.ISendMaster|null);

                    /** SendGiftBroadcast medalInfo */
                    medalInfo?: (bilibili.live.gift.v1.SendGiftBroadcast.IMedalInfo|null);

                    /** SendGiftBroadcast blindGift */
                    blindGift?: (bilibili.live.gift.v1.SendGiftBroadcast.IBlindGift|null);

                    /** SendGiftBroadcast giftList */
                    giftList?: (bilibili.live.gift.v1.SendGiftBroadcast.IGiftItem[]|null);

                    /** SendGiftBroadcast switch */
                    "switch"?: (boolean|null);

                    /** SendGiftBroadcast test */
                    test?: (number|Long|null);

                    /** SendGiftBroadcast wealthInfo */
                    wealthInfo?: (bilibili.live.gift.v1.SendGiftBroadcast.IWealthInfo|null);

                    /** SendGiftBroadcast groupMedal */
                    groupMedal?: (bilibili.live.gift.v1.IGroupMedalBrief|null);

                    /** SendGiftBroadcast senderUinfo */
                    senderUinfo?: (bilibili.live.component.common_model.user_dagw.IUserInfo|null);
                }

                /** Represents a SendGiftBroadcast. */
                class SendGiftBroadcast implements ISendGiftBroadcast {

                    /**
                     * Constructs a new SendGiftBroadcast.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: bilibili.live.gift.v1.ISendGiftBroadcast);

                    /** SendGiftBroadcast uid. */
                    public uid: (number|Long);

                    /** SendGiftBroadcast uname. */
                    public uname: string;

                    /** SendGiftBroadcast face. */
                    public face: string;

                    /** SendGiftBroadcast nameColor. */
                    public nameColor: string;

                    /** SendGiftBroadcast guardLevel. */
                    public guardLevel: (number|Long);

                    /** SendGiftBroadcast svgaBlock. */
                    public svgaBlock: (number|Long);

                    /** SendGiftBroadcast sendMaster. */
                    public sendMaster?: (bilibili.live.gift.v1.SendGiftBroadcast.ISendMaster|null);

                    /** SendGiftBroadcast medalInfo. */
                    public medalInfo?: (bilibili.live.gift.v1.SendGiftBroadcast.IMedalInfo|null);

                    /** SendGiftBroadcast blindGift. */
                    public blindGift?: (bilibili.live.gift.v1.SendGiftBroadcast.IBlindGift|null);

                    /** SendGiftBroadcast giftList. */
                    public giftList: bilibili.live.gift.v1.SendGiftBroadcast.IGiftItem[];

                    /** SendGiftBroadcast switch. */
                    public switch: boolean;

                    /** SendGiftBroadcast test. */
                    public test: (number|Long);

                    /** SendGiftBroadcast wealthInfo. */
                    public wealthInfo?: (bilibili.live.gift.v1.SendGiftBroadcast.IWealthInfo|null);

                    /** SendGiftBroadcast groupMedal. */
                    public groupMedal?: (bilibili.live.gift.v1.IGroupMedalBrief|null);

                    /** SendGiftBroadcast senderUinfo. */
                    public senderUinfo?: (bilibili.live.component.common_model.user_dagw.IUserInfo|null);

                    /**
                     * Creates a new SendGiftBroadcast instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SendGiftBroadcast instance
                     */
                    public static create(properties?: bilibili.live.gift.v1.ISendGiftBroadcast): bilibili.live.gift.v1.SendGiftBroadcast;

                    /**
                     * Encodes the specified SendGiftBroadcast message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.verify|verify} messages.
                     * @param message SendGiftBroadcast message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: bilibili.live.gift.v1.ISendGiftBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SendGiftBroadcast message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.verify|verify} messages.
                     * @param message SendGiftBroadcast message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: bilibili.live.gift.v1.ISendGiftBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SendGiftBroadcast message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SendGiftBroadcast
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast;

                    /**
                     * Decodes a SendGiftBroadcast message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SendGiftBroadcast
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast;

                    /**
                     * Verifies a SendGiftBroadcast message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SendGiftBroadcast message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SendGiftBroadcast
                     */
                    public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast;

                    /**
                     * Creates a plain object from a SendGiftBroadcast message. Also converts values to other types if specified.
                     * @param message SendGiftBroadcast
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SendGiftBroadcast to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for SendGiftBroadcast
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace SendGiftBroadcast {

                    /** Properties of a BagGiftInfo. */
                    interface IBagGiftInfo {

                        /** BagGiftInfo showPrice */
                        showPrice?: (number|null);

                        /** BagGiftInfo priceForShow */
                        priceForShow?: (number|Long|null);
                    }

                    /** Represents a BagGiftInfo. */
                    class BagGiftInfo implements IBagGiftInfo {

                        /**
                         * Constructs a new BagGiftInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IBagGiftInfo);

                        /** BagGiftInfo showPrice. */
                        public showPrice: number;

                        /** BagGiftInfo priceForShow. */
                        public priceForShow: (number|Long);

                        /**
                         * Creates a new BagGiftInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BagGiftInfo instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IBagGiftInfo): bilibili.live.gift.v1.SendGiftBroadcast.BagGiftInfo;

                        /**
                         * Encodes the specified BagGiftInfo message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.BagGiftInfo.verify|verify} messages.
                         * @param message BagGiftInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IBagGiftInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BagGiftInfo message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.BagGiftInfo.verify|verify} messages.
                         * @param message BagGiftInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IBagGiftInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BagGiftInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BagGiftInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.BagGiftInfo;

                        /**
                         * Decodes a BagGiftInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BagGiftInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.BagGiftInfo;

                        /**
                         * Verifies a BagGiftInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BagGiftInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BagGiftInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.BagGiftInfo;

                        /**
                         * Creates a plain object from a BagGiftInfo message. Also converts values to other types if specified.
                         * @param message BagGiftInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.BagGiftInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BagGiftInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BagGiftInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a BlindGift. */
                    interface IBlindGift {

                        /** BlindGift blindGiftConfigId */
                        blindGiftConfigId?: (number|Long|null);

                        /** BlindGift originalGiftId */
                        originalGiftId?: (number|Long|null);

                        /** BlindGift originalGiftName */
                        originalGiftName?: (string|null);

                        /** BlindGift from */
                        from?: (number|Long|null);

                        /** BlindGift giftAction */
                        giftAction?: (string|null);

                        /** BlindGift originalGiftPrice */
                        originalGiftPrice?: (number|Long|null);

                        /** BlindGift giftTipPrice */
                        giftTipPrice?: (number|Long|null);
                    }

                    /** Represents a BlindGift. */
                    class BlindGift implements IBlindGift {

                        /**
                         * Constructs a new BlindGift.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IBlindGift);

                        /** BlindGift blindGiftConfigId. */
                        public blindGiftConfigId: (number|Long);

                        /** BlindGift originalGiftId. */
                        public originalGiftId: (number|Long);

                        /** BlindGift originalGiftName. */
                        public originalGiftName: string;

                        /** BlindGift from. */
                        public from: (number|Long);

                        /** BlindGift giftAction. */
                        public giftAction: string;

                        /** BlindGift originalGiftPrice. */
                        public originalGiftPrice: (number|Long);

                        /** BlindGift giftTipPrice. */
                        public giftTipPrice: (number|Long);

                        /**
                         * Creates a new BlindGift instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BlindGift instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IBlindGift): bilibili.live.gift.v1.SendGiftBroadcast.BlindGift;

                        /**
                         * Encodes the specified BlindGift message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.BlindGift.verify|verify} messages.
                         * @param message BlindGift message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IBlindGift, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BlindGift message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.BlindGift.verify|verify} messages.
                         * @param message BlindGift message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IBlindGift, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BlindGift message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BlindGift
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.BlindGift;

                        /**
                         * Decodes a BlindGift message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BlindGift
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.BlindGift;

                        /**
                         * Verifies a BlindGift message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BlindGift message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BlindGift
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.BlindGift;

                        /**
                         * Creates a plain object from a BlindGift message. Also converts values to other types if specified.
                         * @param message BlindGift
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.BlindGift, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BlindGift to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for BlindGift
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FaceEffect. */
                    interface IFaceEffect {

                        /** FaceEffect faceEffectType */
                        faceEffectType?: (number|Long|null);

                        /** FaceEffect candidateFaceEffects */
                        candidateFaceEffects?: (bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectItem[]|null);
                    }

                    /** Represents a FaceEffect. */
                    class FaceEffect implements IFaceEffect {

                        /**
                         * Constructs a new FaceEffect.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffect);

                        /** FaceEffect faceEffectType. */
                        public faceEffectType: (number|Long);

                        /** FaceEffect candidateFaceEffects. */
                        public candidateFaceEffects: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectItem[];

                        /**
                         * Creates a new FaceEffect instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FaceEffect instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffect): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffect;

                        /**
                         * Encodes the specified FaceEffect message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.FaceEffect.verify|verify} messages.
                         * @param message FaceEffect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FaceEffect message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.FaceEffect.verify|verify} messages.
                         * @param message FaceEffect message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffect, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FaceEffect message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FaceEffect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffect;

                        /**
                         * Decodes a FaceEffect message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FaceEffect
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffect;

                        /**
                         * Verifies a FaceEffect message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FaceEffect message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FaceEffect
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffect;

                        /**
                         * Creates a plain object from a FaceEffect message. Also converts values to other types if specified.
                         * @param message FaceEffect
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.FaceEffect, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FaceEffect to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FaceEffect
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FaceEffectItem. */
                    interface IFaceEffectItem {

                        /** FaceEffectItem effectId */
                        effectId?: (number|Long|null);

                        /** FaceEffectItem source */
                        source?: (number|Long|null);
                    }

                    /** Represents a FaceEffectItem. */
                    class FaceEffectItem implements IFaceEffectItem {

                        /**
                         * Constructs a new FaceEffectItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectItem);

                        /** FaceEffectItem effectId. */
                        public effectId: (number|Long);

                        /** FaceEffectItem source. */
                        public source: (number|Long);

                        /**
                         * Creates a new FaceEffectItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FaceEffectItem instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectItem): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectItem;

                        /**
                         * Encodes the specified FaceEffectItem message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectItem.verify|verify} messages.
                         * @param message FaceEffectItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FaceEffectItem message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectItem.verify|verify} messages.
                         * @param message FaceEffectItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FaceEffectItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FaceEffectItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectItem;

                        /**
                         * Decodes a FaceEffectItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FaceEffectItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectItem;

                        /**
                         * Verifies a FaceEffectItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FaceEffectItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FaceEffectItem
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectItem;

                        /**
                         * Creates a plain object from a FaceEffectItem message. Also converts values to other types if specified.
                         * @param message FaceEffectItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FaceEffectItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FaceEffectItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FaceEffectV2. */
                    interface IFaceEffectV2 {

                        /** FaceEffectV2 id */
                        id?: (number|Long|null);

                        /** FaceEffectV2 type */
                        type?: (number|Long|null);
                    }

                    /** Represents a FaceEffectV2. */
                    class FaceEffectV2 implements IFaceEffectV2 {

                        /**
                         * Constructs a new FaceEffectV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectV2);

                        /** FaceEffectV2 id. */
                        public id: (number|Long);

                        /** FaceEffectV2 type. */
                        public type: (number|Long);

                        /**
                         * Creates a new FaceEffectV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FaceEffectV2 instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectV2): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectV2;

                        /**
                         * Encodes the specified FaceEffectV2 message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectV2.verify|verify} messages.
                         * @param message FaceEffectV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FaceEffectV2 message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectV2.verify|verify} messages.
                         * @param message FaceEffectV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FaceEffectV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FaceEffectV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectV2;

                        /**
                         * Decodes a FaceEffectV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FaceEffectV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectV2;

                        /**
                         * Verifies a FaceEffectV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FaceEffectV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FaceEffectV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectV2;

                        /**
                         * Creates a plain object from a FaceEffectV2 message. Also converts values to other types if specified.
                         * @param message FaceEffectV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.FaceEffectV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FaceEffectV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FaceEffectV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GiftItem. */
                    interface IGiftItem {

                        /** GiftItem giftId */
                        giftId?: (number|Long|null);

                        /** GiftItem giftName */
                        giftName?: (string|null);

                        /** GiftItem num */
                        num?: (number|Long|null);

                        /** GiftItem demarcation */
                        demarcation?: (number|Long|null);

                        /** GiftItem price */
                        price?: (number|Long|null);

                        /** GiftItem discountPrice */
                        discountPrice?: (number|Long|null);

                        /** GiftItem totalCoin */
                        totalCoin?: (number|Long|null);

                        /** GiftItem coinType */
                        coinType?: (string|null);

                        /** GiftItem tid */
                        tid?: (string|null);

                        /** GiftItem timestamp */
                        timestamp?: (number|Long|null);

                        /** GiftItem superBatchGiftNum */
                        superBatchGiftNum?: (number|Long|null);

                        /** GiftItem batchComboId */
                        batchComboId?: (string|null);

                        /** GiftItem comboResourcesId */
                        comboResourcesId?: (number|Long|null);

                        /** GiftItem comboTotalCoin */
                        comboTotalCoin?: (number|Long|null);

                        /** GiftItem comboStayTime */
                        comboStayTime?: (number|Long|null);

                        /** GiftItem magnification */
                        magnification?: (number|null);

                        /** GiftItem showBatchComboSend */
                        showBatchComboSend?: (boolean|null);

                        /** GiftItem action */
                        action?: (string|null);

                        /** GiftItem effectBlock */
                        effectBlock?: (number|Long|null);

                        /** GiftItem isSpecialBatch */
                        isSpecialBatch?: (number|Long|null);

                        /** GiftItem floatScResourceId */
                        floatScResourceId?: (number|Long|null);

                        /** GiftItem tagImage */
                        tagImage?: (string|null);

                        /** GiftItem critProb */
                        critProb?: (number|Long|null);

                        /** GiftItem rcost */
                        rcost?: (number|Long|null);

                        /** GiftItem test */
                        test?: (number|Long|null);

                        /** GiftItem faceEffectType */
                        faceEffectType?: (number|Long|null);

                        /** GiftItem faceEffectId */
                        faceEffectId?: (number|Long|null);

                        /** GiftItem isNaming */
                        isNaming?: (boolean|null);

                        /** GiftItem receiveUserInfo */
                        receiveUserInfo?: (bilibili.live.gift.v1.SendGiftBroadcast.IReceiveUserInfo|null);

                        /** GiftItem isJoinReceiver */
                        isJoinReceiver?: (boolean|null);

                        /** GiftItem bagGift */
                        bagGift?: (bilibili.live.gift.v1.SendGiftBroadcast.IBagGiftInfo|null);

                        /** GiftItem giftTag */
                        giftTag?: ((number|Long)[]|null);

                        /** GiftItem receiverUinfo */
                        receiverUinfo?: (bilibili.live.component.common_model.user_dagw.IUserInfo|null);

                        /** GiftItem faceEffectV2 */
                        faceEffectV2?: (bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectV2|null);

                        /** GiftItem giftInfo */
                        giftInfo?: (bilibili.live.gift.v1.IGiftMaterialSnapShot|null);

                        /** GiftItem giftTipPrice */
                        giftTipPrice?: (number|Long|null);

                        /** GiftItem faceEffect */
                        faceEffect?: (bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffect|null);

                        /** GiftItem benefits */
                        benefits?: (bilibili.live.gift.v1.IGiftBenefits|null);

                        /** GiftItem effectConfig */
                        effectConfig?: (bilibili.live.component.common_model.effect.IEffectConfigItem|null);
                    }

                    /** Represents a GiftItem. */
                    class GiftItem implements IGiftItem {

                        /**
                         * Constructs a new GiftItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IGiftItem);

                        /** GiftItem giftId. */
                        public giftId: (number|Long);

                        /** GiftItem giftName. */
                        public giftName: string;

                        /** GiftItem num. */
                        public num: (number|Long);

                        /** GiftItem demarcation. */
                        public demarcation: (number|Long);

                        /** GiftItem price. */
                        public price: (number|Long);

                        /** GiftItem discountPrice. */
                        public discountPrice: (number|Long);

                        /** GiftItem totalCoin. */
                        public totalCoin: (number|Long);

                        /** GiftItem coinType. */
                        public coinType: string;

                        /** GiftItem tid. */
                        public tid: string;

                        /** GiftItem timestamp. */
                        public timestamp: (number|Long);

                        /** GiftItem superBatchGiftNum. */
                        public superBatchGiftNum: (number|Long);

                        /** GiftItem batchComboId. */
                        public batchComboId: string;

                        /** GiftItem comboResourcesId. */
                        public comboResourcesId: (number|Long);

                        /** GiftItem comboTotalCoin. */
                        public comboTotalCoin: (number|Long);

                        /** GiftItem comboStayTime. */
                        public comboStayTime: (number|Long);

                        /** GiftItem magnification. */
                        public magnification: number;

                        /** GiftItem showBatchComboSend. */
                        public showBatchComboSend: boolean;

                        /** GiftItem action. */
                        public action: string;

                        /** GiftItem effectBlock. */
                        public effectBlock: (number|Long);

                        /** GiftItem isSpecialBatch. */
                        public isSpecialBatch: (number|Long);

                        /** GiftItem floatScResourceId. */
                        public floatScResourceId: (number|Long);

                        /** GiftItem tagImage. */
                        public tagImage: string;

                        /** GiftItem critProb. */
                        public critProb: (number|Long);

                        /** GiftItem rcost. */
                        public rcost: (number|Long);

                        /** GiftItem test. */
                        public test: (number|Long);

                        /** GiftItem faceEffectType. */
                        public faceEffectType: (number|Long);

                        /** GiftItem faceEffectId. */
                        public faceEffectId: (number|Long);

                        /** GiftItem isNaming. */
                        public isNaming: boolean;

                        /** GiftItem receiveUserInfo. */
                        public receiveUserInfo?: (bilibili.live.gift.v1.SendGiftBroadcast.IReceiveUserInfo|null);

                        /** GiftItem isJoinReceiver. */
                        public isJoinReceiver: boolean;

                        /** GiftItem bagGift. */
                        public bagGift?: (bilibili.live.gift.v1.SendGiftBroadcast.IBagGiftInfo|null);

                        /** GiftItem giftTag. */
                        public giftTag: (number|Long)[];

                        /** GiftItem receiverUinfo. */
                        public receiverUinfo?: (bilibili.live.component.common_model.user_dagw.IUserInfo|null);

                        /** GiftItem faceEffectV2. */
                        public faceEffectV2?: (bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffectV2|null);

                        /** GiftItem giftInfo. */
                        public giftInfo?: (bilibili.live.gift.v1.IGiftMaterialSnapShot|null);

                        /** GiftItem giftTipPrice. */
                        public giftTipPrice: (number|Long);

                        /** GiftItem faceEffect. */
                        public faceEffect?: (bilibili.live.gift.v1.SendGiftBroadcast.IFaceEffect|null);

                        /** GiftItem benefits. */
                        public benefits?: (bilibili.live.gift.v1.IGiftBenefits|null);

                        /** GiftItem effectConfig. */
                        public effectConfig?: (bilibili.live.component.common_model.effect.IEffectConfigItem|null);

                        /**
                         * Creates a new GiftItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GiftItem instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IGiftItem): bilibili.live.gift.v1.SendGiftBroadcast.GiftItem;

                        /**
                         * Encodes the specified GiftItem message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.GiftItem.verify|verify} messages.
                         * @param message GiftItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IGiftItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GiftItem message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.GiftItem.verify|verify} messages.
                         * @param message GiftItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IGiftItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GiftItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GiftItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.GiftItem;

                        /**
                         * Decodes a GiftItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GiftItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.GiftItem;

                        /**
                         * Verifies a GiftItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GiftItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GiftItem
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.GiftItem;

                        /**
                         * Creates a plain object from a GiftItem message. Also converts values to other types if specified.
                         * @param message GiftItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.GiftItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GiftItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GiftItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MedalInfo. */
                    interface IMedalInfo {

                        /** MedalInfo targetId */
                        targetId?: (number|Long|null);

                        /** MedalInfo special */
                        special?: (string|null);

                        /** MedalInfo anchorUname */
                        anchorUname?: (string|null);

                        /** MedalInfo anchorRoomid */
                        anchorRoomid?: (number|Long|null);

                        /** MedalInfo medalLevel */
                        medalLevel?: (number|Long|null);

                        /** MedalInfo medalName */
                        medalName?: (string|null);

                        /** MedalInfo medalColor */
                        medalColor?: (number|Long|null);

                        /** MedalInfo medalColorStart */
                        medalColorStart?: (number|Long|null);

                        /** MedalInfo medalColorEnd */
                        medalColorEnd?: (number|Long|null);

                        /** MedalInfo medalColorBorder */
                        medalColorBorder?: (number|Long|null);

                        /** MedalInfo isLighted */
                        isLighted?: (number|Long|null);

                        /** MedalInfo guardLevel */
                        guardLevel?: (number|Long|null);
                    }

                    /** Represents a MedalInfo. */
                    class MedalInfo implements IMedalInfo {

                        /**
                         * Constructs a new MedalInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IMedalInfo);

                        /** MedalInfo targetId. */
                        public targetId: (number|Long);

                        /** MedalInfo special. */
                        public special: string;

                        /** MedalInfo anchorUname. */
                        public anchorUname: string;

                        /** MedalInfo anchorRoomid. */
                        public anchorRoomid: (number|Long);

                        /** MedalInfo medalLevel. */
                        public medalLevel: (number|Long);

                        /** MedalInfo medalName. */
                        public medalName: string;

                        /** MedalInfo medalColor. */
                        public medalColor: (number|Long);

                        /** MedalInfo medalColorStart. */
                        public medalColorStart: (number|Long);

                        /** MedalInfo medalColorEnd. */
                        public medalColorEnd: (number|Long);

                        /** MedalInfo medalColorBorder. */
                        public medalColorBorder: (number|Long);

                        /** MedalInfo isLighted. */
                        public isLighted: (number|Long);

                        /** MedalInfo guardLevel. */
                        public guardLevel: (number|Long);

                        /**
                         * Creates a new MedalInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MedalInfo instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IMedalInfo): bilibili.live.gift.v1.SendGiftBroadcast.MedalInfo;

                        /**
                         * Encodes the specified MedalInfo message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.MedalInfo.verify|verify} messages.
                         * @param message MedalInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IMedalInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MedalInfo message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.MedalInfo.verify|verify} messages.
                         * @param message MedalInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IMedalInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MedalInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MedalInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.MedalInfo;

                        /**
                         * Decodes a MedalInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MedalInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.MedalInfo;

                        /**
                         * Verifies a MedalInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MedalInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MedalInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.MedalInfo;

                        /**
                         * Creates a plain object from a MedalInfo message. Also converts values to other types if specified.
                         * @param message MedalInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.MedalInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MedalInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MedalInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ReceiveUserInfo. */
                    interface IReceiveUserInfo {

                        /** ReceiveUserInfo uname */
                        uname?: (string|null);

                        /** ReceiveUserInfo uid */
                        uid?: (number|Long|null);
                    }

                    /** Represents a ReceiveUserInfo. */
                    class ReceiveUserInfo implements IReceiveUserInfo {

                        /**
                         * Constructs a new ReceiveUserInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IReceiveUserInfo);

                        /** ReceiveUserInfo uname. */
                        public uname: string;

                        /** ReceiveUserInfo uid. */
                        public uid: (number|Long);

                        /**
                         * Creates a new ReceiveUserInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ReceiveUserInfo instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IReceiveUserInfo): bilibili.live.gift.v1.SendGiftBroadcast.ReceiveUserInfo;

                        /**
                         * Encodes the specified ReceiveUserInfo message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.ReceiveUserInfo.verify|verify} messages.
                         * @param message ReceiveUserInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IReceiveUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ReceiveUserInfo message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.ReceiveUserInfo.verify|verify} messages.
                         * @param message ReceiveUserInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IReceiveUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ReceiveUserInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ReceiveUserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.ReceiveUserInfo;

                        /**
                         * Decodes a ReceiveUserInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ReceiveUserInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.ReceiveUserInfo;

                        /**
                         * Verifies a ReceiveUserInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ReceiveUserInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ReceiveUserInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.ReceiveUserInfo;

                        /**
                         * Creates a plain object from a ReceiveUserInfo message. Also converts values to other types if specified.
                         * @param message ReceiveUserInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.ReceiveUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ReceiveUserInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ReceiveUserInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SendMaster. */
                    interface ISendMaster {

                        /** SendMaster uid */
                        uid?: (number|Long|null);

                        /** SendMaster uname */
                        uname?: (string|null);
                    }

                    /** Represents a SendMaster. */
                    class SendMaster implements ISendMaster {

                        /**
                         * Constructs a new SendMaster.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.ISendMaster);

                        /** SendMaster uid. */
                        public uid: (number|Long);

                        /** SendMaster uname. */
                        public uname: string;

                        /**
                         * Creates a new SendMaster instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SendMaster instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.ISendMaster): bilibili.live.gift.v1.SendGiftBroadcast.SendMaster;

                        /**
                         * Encodes the specified SendMaster message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.SendMaster.verify|verify} messages.
                         * @param message SendMaster message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.ISendMaster, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SendMaster message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.SendMaster.verify|verify} messages.
                         * @param message SendMaster message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.ISendMaster, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SendMaster message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SendMaster
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.SendMaster;

                        /**
                         * Decodes a SendMaster message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SendMaster
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.SendMaster;

                        /**
                         * Verifies a SendMaster message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SendMaster message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SendMaster
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.SendMaster;

                        /**
                         * Creates a plain object from a SendMaster message. Also converts values to other types if specified.
                         * @param message SendMaster
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.SendMaster, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SendMaster to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SendMaster
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a WealthInfo. */
                    interface IWealthInfo {

                        /** WealthInfo level */
                        level?: (number|Long|null);
                    }

                    /** Represents a WealthInfo. */
                    class WealthInfo implements IWealthInfo {

                        /**
                         * Constructs a new WealthInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IWealthInfo);

                        /** WealthInfo level. */
                        public level: (number|Long);

                        /**
                         * Creates a new WealthInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns WealthInfo instance
                         */
                        public static create(properties?: bilibili.live.gift.v1.SendGiftBroadcast.IWealthInfo): bilibili.live.gift.v1.SendGiftBroadcast.WealthInfo;

                        /**
                         * Encodes the specified WealthInfo message. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.WealthInfo.verify|verify} messages.
                         * @param message WealthInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.gift.v1.SendGiftBroadcast.IWealthInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified WealthInfo message, length delimited. Does not implicitly {@link bilibili.live.gift.v1.SendGiftBroadcast.WealthInfo.verify|verify} messages.
                         * @param message WealthInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.gift.v1.SendGiftBroadcast.IWealthInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a WealthInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns WealthInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.gift.v1.SendGiftBroadcast.WealthInfo;

                        /**
                         * Decodes a WealthInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns WealthInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.gift.v1.SendGiftBroadcast.WealthInfo;

                        /**
                         * Verifies a WealthInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a WealthInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns WealthInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.gift.v1.SendGiftBroadcast.WealthInfo;

                        /**
                         * Creates a plain object from a WealthInfo message. Also converts values to other types if specified.
                         * @param message WealthInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.gift.v1.SendGiftBroadcast.WealthInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this WealthInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for WealthInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }

        /** Namespace rankdb. */
        namespace rankdb {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a GoldRankBroadcast. */
                interface IGoldRankBroadcast {

                    /** GoldRankBroadcast rankType */
                    rankType?: (string|null);

                    /** GoldRankBroadcast list */
                    list?: (bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem[]|null);

                    /** GoldRankBroadcast onlineList */
                    onlineList?: (bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem[]|null);
                }

                /** Represents a GoldRankBroadcast. */
                class GoldRankBroadcast implements IGoldRankBroadcast {

                    /**
                     * Constructs a new GoldRankBroadcast.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: bilibili.live.rankdb.v1.IGoldRankBroadcast);

                    /** GoldRankBroadcast rankType. */
                    public rankType: string;

                    /** GoldRankBroadcast list. */
                    public list: bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem[];

                    /** GoldRankBroadcast onlineList. */
                    public onlineList: bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem[];

                    /**
                     * Creates a new GoldRankBroadcast instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GoldRankBroadcast instance
                     */
                    public static create(properties?: bilibili.live.rankdb.v1.IGoldRankBroadcast): bilibili.live.rankdb.v1.GoldRankBroadcast;

                    /**
                     * Encodes the specified GoldRankBroadcast message. Does not implicitly {@link bilibili.live.rankdb.v1.GoldRankBroadcast.verify|verify} messages.
                     * @param message GoldRankBroadcast message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: bilibili.live.rankdb.v1.IGoldRankBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GoldRankBroadcast message, length delimited. Does not implicitly {@link bilibili.live.rankdb.v1.GoldRankBroadcast.verify|verify} messages.
                     * @param message GoldRankBroadcast message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: bilibili.live.rankdb.v1.IGoldRankBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GoldRankBroadcast message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GoldRankBroadcast
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.rankdb.v1.GoldRankBroadcast;

                    /**
                     * Decodes a GoldRankBroadcast message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GoldRankBroadcast
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.rankdb.v1.GoldRankBroadcast;

                    /**
                     * Verifies a GoldRankBroadcast message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GoldRankBroadcast message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GoldRankBroadcast
                     */
                    public static fromObject(object: { [k: string]: any }): bilibili.live.rankdb.v1.GoldRankBroadcast;

                    /**
                     * Creates a plain object from a GoldRankBroadcast message. Also converts values to other types if specified.
                     * @param message GoldRankBroadcast
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: bilibili.live.rankdb.v1.GoldRankBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GoldRankBroadcast to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for GoldRankBroadcast
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace GoldRankBroadcast {

                    /** Properties of a GoldRankBroadcastItem. */
                    interface IGoldRankBroadcastItem {

                        /** GoldRankBroadcastItem uid */
                        uid?: (number|Long|null);

                        /** GoldRankBroadcastItem face */
                        face?: (string|null);

                        /** GoldRankBroadcastItem score */
                        score?: (string|null);

                        /** GoldRankBroadcastItem uname */
                        uname?: (string|null);

                        /** GoldRankBroadcastItem rank */
                        rank?: (number|Long|null);

                        /** GoldRankBroadcastItem guardLevel */
                        guardLevel?: (number|Long|null);

                        /** GoldRankBroadcastItem isMystery */
                        isMystery?: (boolean|null);

                        /** GoldRankBroadcastItem uinfo */
                        uinfo?: (bilibili.live.component.common_model.user_dagw.IUserInfo|null);
                    }

                    /** Represents a GoldRankBroadcastItem. */
                    class GoldRankBroadcastItem implements IGoldRankBroadcastItem {

                        /**
                         * Constructs a new GoldRankBroadcastItem.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem);

                        /** GoldRankBroadcastItem uid. */
                        public uid: (number|Long);

                        /** GoldRankBroadcastItem face. */
                        public face: string;

                        /** GoldRankBroadcastItem score. */
                        public score: string;

                        /** GoldRankBroadcastItem uname. */
                        public uname: string;

                        /** GoldRankBroadcastItem rank. */
                        public rank: (number|Long);

                        /** GoldRankBroadcastItem guardLevel. */
                        public guardLevel: (number|Long);

                        /** GoldRankBroadcastItem isMystery. */
                        public isMystery: boolean;

                        /** GoldRankBroadcastItem uinfo. */
                        public uinfo?: (bilibili.live.component.common_model.user_dagw.IUserInfo|null);

                        /**
                         * Creates a new GoldRankBroadcastItem instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GoldRankBroadcastItem instance
                         */
                        public static create(properties?: bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem): bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem;

                        /**
                         * Encodes the specified GoldRankBroadcastItem message. Does not implicitly {@link bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.verify|verify} messages.
                         * @param message GoldRankBroadcastItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GoldRankBroadcastItem message, length delimited. Does not implicitly {@link bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem.verify|verify} messages.
                         * @param message GoldRankBroadcastItem message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.rankdb.v1.GoldRankBroadcast.IGoldRankBroadcastItem, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GoldRankBroadcastItem message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GoldRankBroadcastItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem;

                        /**
                         * Decodes a GoldRankBroadcastItem message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GoldRankBroadcastItem
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem;

                        /**
                         * Verifies a GoldRankBroadcastItem message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GoldRankBroadcastItem message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GoldRankBroadcastItem
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem;

                        /**
                         * Creates a plain object from a GoldRankBroadcastItem message. Also converts values to other types if specified.
                         * @param message GoldRankBroadcastItem
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.rankdb.v1.GoldRankBroadcast.GoldRankBroadcastItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GoldRankBroadcastItem to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GoldRankBroadcastItem
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }

        /** Namespace xuserreward. */
        namespace xuserreward {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an InteractWord. */
                interface IInteractWord {

                    /** InteractWord uid */
                    uid?: (number|Long|null);

                    /** InteractWord uname */
                    uname?: (string|null);

                    /** InteractWord unameColor */
                    unameColor?: (string|null);

                    /** InteractWord identities */
                    identities?: ((number|Long)[]|null);

                    /** InteractWord msgType */
                    msgType?: (number|Long|null);

                    /** InteractWord roomid */
                    roomid?: (number|Long|null);

                    /** InteractWord timestamp */
                    timestamp?: (number|Long|null);

                    /** InteractWord score */
                    score?: (number|Long|null);

                    /** InteractWord fansMedal */
                    fansMedal?: (bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo|null);

                    /** InteractWord isSpread */
                    isSpread?: (number|Long|null);

                    /** InteractWord spreadInfo */
                    spreadInfo?: (string|null);

                    /** InteractWord contribution */
                    contribution?: (bilibili.live.xuserreward.v1.InteractWord.IContributionInfo|null);

                    /** InteractWord spreadDesc */
                    spreadDesc?: (string|null);

                    /** InteractWord tailIcon */
                    tailIcon?: (number|Long|null);

                    /** InteractWord triggerTime */
                    triggerTime?: (number|Long|null);

                    /** InteractWord privilegeType */
                    privilegeType?: (number|Long|null);

                    /** InteractWord coreUserType */
                    coreUserType?: (number|Long|null);

                    /** InteractWord tailText */
                    tailText?: (string|null);

                    /** InteractWord contributionV2 */
                    contributionV2?: (bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2|null);

                    /** InteractWord groupMedal */
                    groupMedal?: (bilibili.live.component.common_model.fans_club.IGroupMedalBrief|null);

                    /** InteractWord isMystery */
                    isMystery?: (boolean|null);

                    /** InteractWord uinfo */
                    uinfo?: (bilibili.live.component.common_model.user_dagw.IUserInfo|null);

                    /** InteractWord relationTail */
                    relationTail?: (bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation|null);
                }

                /** Represents an InteractWord. */
                class InteractWord implements IInteractWord {

                    /**
                     * Constructs a new InteractWord.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: bilibili.live.xuserreward.v1.IInteractWord);

                    /** InteractWord uid. */
                    public uid: (number|Long);

                    /** InteractWord uname. */
                    public uname: string;

                    /** InteractWord unameColor. */
                    public unameColor: string;

                    /** InteractWord identities. */
                    public identities: (number|Long)[];

                    /** InteractWord msgType. */
                    public msgType: (number|Long);

                    /** InteractWord roomid. */
                    public roomid: (number|Long);

                    /** InteractWord timestamp. */
                    public timestamp: (number|Long);

                    /** InteractWord score. */
                    public score: (number|Long);

                    /** InteractWord fansMedal. */
                    public fansMedal?: (bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo|null);

                    /** InteractWord isSpread. */
                    public isSpread: (number|Long);

                    /** InteractWord spreadInfo. */
                    public spreadInfo: string;

                    /** InteractWord contribution. */
                    public contribution?: (bilibili.live.xuserreward.v1.InteractWord.IContributionInfo|null);

                    /** InteractWord spreadDesc. */
                    public spreadDesc: string;

                    /** InteractWord tailIcon. */
                    public tailIcon: (number|Long);

                    /** InteractWord triggerTime. */
                    public triggerTime: (number|Long);

                    /** InteractWord privilegeType. */
                    public privilegeType: (number|Long);

                    /** InteractWord coreUserType. */
                    public coreUserType: (number|Long);

                    /** InteractWord tailText. */
                    public tailText: string;

                    /** InteractWord contributionV2. */
                    public contributionV2?: (bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2|null);

                    /** InteractWord groupMedal. */
                    public groupMedal?: (bilibili.live.component.common_model.fans_club.IGroupMedalBrief|null);

                    /** InteractWord isMystery. */
                    public isMystery: boolean;

                    /** InteractWord uinfo. */
                    public uinfo?: (bilibili.live.component.common_model.user_dagw.IUserInfo|null);

                    /** InteractWord relationTail. */
                    public relationTail?: (bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation|null);

                    /**
                     * Creates a new InteractWord instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns InteractWord instance
                     */
                    public static create(properties?: bilibili.live.xuserreward.v1.IInteractWord): bilibili.live.xuserreward.v1.InteractWord;

                    /**
                     * Encodes the specified InteractWord message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.verify|verify} messages.
                     * @param message InteractWord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: bilibili.live.xuserreward.v1.IInteractWord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified InteractWord message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.verify|verify} messages.
                     * @param message InteractWord message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: bilibili.live.xuserreward.v1.IInteractWord, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an InteractWord message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns InteractWord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.xuserreward.v1.InteractWord;

                    /**
                     * Decodes an InteractWord message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns InteractWord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.xuserreward.v1.InteractWord;

                    /**
                     * Verifies an InteractWord message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an InteractWord message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns InteractWord
                     */
                    public static fromObject(object: { [k: string]: any }): bilibili.live.xuserreward.v1.InteractWord;

                    /**
                     * Creates a plain object from an InteractWord message. Also converts values to other types if specified.
                     * @param message InteractWord
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: bilibili.live.xuserreward.v1.InteractWord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this InteractWord to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for InteractWord
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace InteractWord {

                    /** Properties of a ContributionInfo. */
                    interface IContributionInfo {

                        /** ContributionInfo grade */
                        grade?: (number|Long|null);
                    }

                    /** Represents a ContributionInfo. */
                    class ContributionInfo implements IContributionInfo {

                        /**
                         * Constructs a new ContributionInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.xuserreward.v1.InteractWord.IContributionInfo);

                        /** ContributionInfo grade. */
                        public grade: (number|Long);

                        /**
                         * Creates a new ContributionInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ContributionInfo instance
                         */
                        public static create(properties?: bilibili.live.xuserreward.v1.InteractWord.IContributionInfo): bilibili.live.xuserreward.v1.InteractWord.ContributionInfo;

                        /**
                         * Encodes the specified ContributionInfo message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.verify|verify} messages.
                         * @param message ContributionInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.xuserreward.v1.InteractWord.IContributionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ContributionInfo message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.ContributionInfo.verify|verify} messages.
                         * @param message ContributionInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.xuserreward.v1.InteractWord.IContributionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ContributionInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ContributionInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.xuserreward.v1.InteractWord.ContributionInfo;

                        /**
                         * Decodes a ContributionInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ContributionInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.xuserreward.v1.InteractWord.ContributionInfo;

                        /**
                         * Verifies a ContributionInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ContributionInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ContributionInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.xuserreward.v1.InteractWord.ContributionInfo;

                        /**
                         * Creates a plain object from a ContributionInfo message. Also converts values to other types if specified.
                         * @param message ContributionInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.xuserreward.v1.InteractWord.ContributionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ContributionInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ContributionInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ContributionInfoV2. */
                    interface IContributionInfoV2 {

                        /** ContributionInfoV2 grade */
                        grade?: (number|Long|null);

                        /** ContributionInfoV2 rankType */
                        rankType?: (string|null);

                        /** ContributionInfoV2 text */
                        text?: (string|null);
                    }

                    /** Represents a ContributionInfoV2. */
                    class ContributionInfoV2 implements IContributionInfoV2 {

                        /**
                         * Constructs a new ContributionInfoV2.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2);

                        /** ContributionInfoV2 grade. */
                        public grade: (number|Long);

                        /** ContributionInfoV2 rankType. */
                        public rankType: string;

                        /** ContributionInfoV2 text. */
                        public text: string;

                        /**
                         * Creates a new ContributionInfoV2 instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ContributionInfoV2 instance
                         */
                        public static create(properties?: bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2): bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2;

                        /**
                         * Encodes the specified ContributionInfoV2 message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.verify|verify} messages.
                         * @param message ContributionInfoV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ContributionInfoV2 message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2.verify|verify} messages.
                         * @param message ContributionInfoV2 message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.xuserreward.v1.InteractWord.IContributionInfoV2, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ContributionInfoV2 message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ContributionInfoV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2;

                        /**
                         * Decodes a ContributionInfoV2 message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ContributionInfoV2
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2;

                        /**
                         * Verifies a ContributionInfoV2 message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ContributionInfoV2 message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ContributionInfoV2
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2;

                        /**
                         * Creates a plain object from a ContributionInfoV2 message. Also converts values to other types if specified.
                         * @param message ContributionInfoV2
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.xuserreward.v1.InteractWord.ContributionInfoV2, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ContributionInfoV2 to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ContributionInfoV2
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a FansMedalInfo. */
                    interface IFansMedalInfo {

                        /** FansMedalInfo targetId */
                        targetId?: (number|Long|null);

                        /** FansMedalInfo medalLevel */
                        medalLevel?: (number|Long|null);

                        /** FansMedalInfo medalName */
                        medalName?: (string|null);

                        /** FansMedalInfo medalColor */
                        medalColor?: (number|Long|null);

                        /** FansMedalInfo medalColorStart */
                        medalColorStart?: (number|Long|null);

                        /** FansMedalInfo medalColorEnd */
                        medalColorEnd?: (number|Long|null);

                        /** FansMedalInfo medalColorBorder */
                        medalColorBorder?: (number|Long|null);

                        /** FansMedalInfo isLighted */
                        isLighted?: (number|Long|null);

                        /** FansMedalInfo guardLevel */
                        guardLevel?: (number|Long|null);

                        /** FansMedalInfo special */
                        special?: (string|null);

                        /** FansMedalInfo iconId */
                        iconId?: (number|Long|null);

                        /** FansMedalInfo anchorRoomid */
                        anchorRoomid?: (number|Long|null);

                        /** FansMedalInfo score */
                        score?: (number|Long|null);
                    }

                    /** Represents a FansMedalInfo. */
                    class FansMedalInfo implements IFansMedalInfo {

                        /**
                         * Constructs a new FansMedalInfo.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo);

                        /** FansMedalInfo targetId. */
                        public targetId: (number|Long);

                        /** FansMedalInfo medalLevel. */
                        public medalLevel: (number|Long);

                        /** FansMedalInfo medalName. */
                        public medalName: string;

                        /** FansMedalInfo medalColor. */
                        public medalColor: (number|Long);

                        /** FansMedalInfo medalColorStart. */
                        public medalColorStart: (number|Long);

                        /** FansMedalInfo medalColorEnd. */
                        public medalColorEnd: (number|Long);

                        /** FansMedalInfo medalColorBorder. */
                        public medalColorBorder: (number|Long);

                        /** FansMedalInfo isLighted. */
                        public isLighted: (number|Long);

                        /** FansMedalInfo guardLevel. */
                        public guardLevel: (number|Long);

                        /** FansMedalInfo special. */
                        public special: string;

                        /** FansMedalInfo iconId. */
                        public iconId: (number|Long);

                        /** FansMedalInfo anchorRoomid. */
                        public anchorRoomid: (number|Long);

                        /** FansMedalInfo score. */
                        public score: (number|Long);

                        /**
                         * Creates a new FansMedalInfo instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns FansMedalInfo instance
                         */
                        public static create(properties?: bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo): bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo;

                        /**
                         * Encodes the specified FansMedalInfo message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.verify|verify} messages.
                         * @param message FansMedalInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified FansMedalInfo message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo.verify|verify} messages.
                         * @param message FansMedalInfo message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.xuserreward.v1.InteractWord.IFansMedalInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a FansMedalInfo message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns FansMedalInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo;

                        /**
                         * Decodes a FansMedalInfo message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns FansMedalInfo
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo;

                        /**
                         * Verifies a FansMedalInfo message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a FansMedalInfo message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns FansMedalInfo
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo;

                        /**
                         * Creates a plain object from a FansMedalInfo message. Also converts values to other types if specified.
                         * @param message FansMedalInfo
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.xuserreward.v1.InteractWord.FansMedalInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this FansMedalInfo to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for FansMedalInfo
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a UserAnchorRelation. */
                    interface IUserAnchorRelation {

                        /** UserAnchorRelation tailIcon */
                        tailIcon?: (string|null);

                        /** UserAnchorRelation tailGuideText */
                        tailGuideText?: (string|null);

                        /** UserAnchorRelation tailType */
                        tailType?: (number|Long|null);
                    }

                    /** Represents a UserAnchorRelation. */
                    class UserAnchorRelation implements IUserAnchorRelation {

                        /**
                         * Constructs a new UserAnchorRelation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation);

                        /** UserAnchorRelation tailIcon. */
                        public tailIcon: string;

                        /** UserAnchorRelation tailGuideText. */
                        public tailGuideText: string;

                        /** UserAnchorRelation tailType. */
                        public tailType: (number|Long);

                        /**
                         * Creates a new UserAnchorRelation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns UserAnchorRelation instance
                         */
                        public static create(properties?: bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation): bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation;

                        /**
                         * Encodes the specified UserAnchorRelation message. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.verify|verify} messages.
                         * @param message UserAnchorRelation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified UserAnchorRelation message, length delimited. Does not implicitly {@link bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation.verify|verify} messages.
                         * @param message UserAnchorRelation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: bilibili.live.xuserreward.v1.InteractWord.IUserAnchorRelation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a UserAnchorRelation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns UserAnchorRelation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation;

                        /**
                         * Decodes a UserAnchorRelation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns UserAnchorRelation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation;

                        /**
                         * Verifies a UserAnchorRelation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a UserAnchorRelation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns UserAnchorRelation
                         */
                        public static fromObject(object: { [k: string]: any }): bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation;

                        /**
                         * Creates a plain object from a UserAnchorRelation message. Also converts values to other types if specified.
                         * @param message UserAnchorRelation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: bilibili.live.xuserreward.v1.InteractWord.UserAnchorRelation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this UserAnchorRelation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for UserAnchorRelation
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }
}
