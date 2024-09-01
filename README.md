# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

Типы пользователей системы:
Admin - администратор системы. Вносит в систему, удаляет данные пользователей (докторов).
Doctor - пользователь системы. Вносит в систему, (удаляет???) данные (своих) пациентов.

Patient - лицо, пользующееся услугами клиники (пример: Иванов Иван Иванович).
Procedure - наименование процедуры (пример: эпиляция).
Treatment - лечение, проводящееся в рамках выбранной пациентом процедуры. По ее окончанию, содержит в себе следующее состояние: total shots, total energy.
Pulse - сущность, содержащее в себе состояние (параметры) периферийных устройств, в рамках проведения лечения (spot size, fluence, patient cooling temperature, patient cooling flow).

На странице пациента, отображается Treatment list. Клик на Treatment - переход на страницу проведенного Treatment.