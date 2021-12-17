import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import globalStyles from "../../assets/globalStyles";
import Icons from "../../assets/icons/icons";
import { Controller } from "react-hook-form";
import validator from "validator";
import { useTranslation } from "react-i18next";

export default function NewUserForm({
    control,
    errors,
    title,
    name,
    adress = true,
}: any) {
    const { t } = useTranslation();

    return (
        <View>
            <View style={styles.titleView}>
                {Icons.plus}
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.inputBox}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 2,
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={[styles.text, styles.divider]}
                            placeholderTextColor="#C4C4C6"
                            placeholder={t("First Name")}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name={`${name}FirstName`}
                    defaultValue=""
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 2,
                        maxLength: 100,
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={[styles.text, styles.divider]}
                            placeholderTextColor="#C4C4C6"
                            placeholder={t("Last Name")}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name={`${name}LastName`}
                    defaultValue=""
                />
                {adress && (
                    <View>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                minLength: 2,
                                maxLength: 100,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={[styles.text, styles.divider]}
                                    placeholderTextColor="#C4C4C6"
                                    placeholder={t("City")}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name={`${name}City`}
                            defaultValue=""
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                minLength: 2,
                                maxLength: 100,
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={[styles.text, styles.divider]}
                                    placeholderTextColor="#C4C4C6"
                                    placeholder={t("Street")}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name={`${name}Street`}
                            defaultValue=""
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                minLength: 1,
                                maxLength: 100,
                                validate: (value) => !isNaN(value),
                            }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={[styles.text, styles.divider]}
                                    placeholderTextColor="#C4C4C6"
                                    placeholder={t("Number")}
                                    onChangeText={onChange}
                                    value={value}
                                    keyboardType="numeric"
                                />
                            )}
                            name={`${name}Number`}
                            defaultValue=""
                        />
                    </View>
                )}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        minLength: 8,
                        maxLength: 10,
                        validate: (value) => !isNaN(value),
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={[styles.text, styles.divider]}
                            placeholderTextColor="#C4C4C6"
                            placeholder={t("Phone Number")}
                            onChangeText={onChange}
                            value={value}
                            keyboardType="numeric"
                        />
                    )}
                    name={`${name}PhoneNumber`}
                    defaultValue=""
                />

                <Controller
                    control={control}
                    rules={{
                        required: true,
                        validate: (value) => validator.isEmail(value),
                    }}
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={styles.text}
                            placeholderTextColor="#C4C4C6"
                            placeholder={t("Email")}
                            onChangeText={onChange}
                            value={value}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    )}
                    name={`${name}Email`}
                    defaultValue=""
                />
            </View>

            {errors[`${name}FirstName`] && (
                <Text style={styles.errorText}>{t("Invalid First Name")}</Text>
            )}
            {errors[`${name}LastName`] && (
                <Text style={styles.errorText}>{t("Invalid Last Name")}</Text>
            )}
            {errors[`${name}City`] && (
                <Text style={styles.errorText}>{t("Invalid City")}</Text>
            )}
            {errors[`${name}Street`] && (
                <Text style={styles.errorText}>{t("Invalid Street")}</Text>
            )}
            {errors[`${name}Number`] && (
                <Text style={styles.errorText}>{t("Invalid Number")}</Text>
            )}
            {errors[`${name}PhoneNumber`] && (
                <Text style={styles.errorText}>
                    {t("Invalid Phone Number")}
                </Text>
            )}
            {errors[`${name}Email`] && (
                <Text style={styles.errorText}>{t("Invalid Email")}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    titleView: {
        flexDirection: "row-reverse",
        alignSelf: "flex-end",
        marginBottom: 10,
        marginTop: 20,
        marginHorizontal: "5%",
        alignItems: "center",
    },
    title: {
        color: globalStyles.color.text,
        fontFamily: globalStyles.font.semiBold,
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: 0.1,
        textAlign: "right",
        alignItems: "center",
        display: "flex",
        marginRight: 6,
    },
    inputBox: {
        width: "90%",
        backgroundColor: "white",
        borderRadius: 12,
        alignSelf: "center",
    },
    text: {
        fontFamily: globalStyles.font.regular,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        textAlign: "right",
        alignItems: "center",
        display: "flex",
        color: globalStyles.color.text,
        padding: 8,
    },
    errorText: {
        fontFamily: globalStyles.font.regular,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        textAlign: "right",
        alignItems: "center",
        display: "flex",
        marginRight: "5%",
        color: globalStyles.color.text,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: "#C4C4C6",
    },
    submitButton: {
        alignItems: "center",
    },
});
