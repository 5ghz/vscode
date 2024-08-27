import { ObservableScope } from "inertial";
import { applyBindings } from "./bindings/bindings";
import { ViewModel } from "./bindings/view-model";
import { OptionProperties, TemplateManifest } from "../clients/sidecar";
import { sendWebviewMessage } from "./comms/comms";

addEventListener("DOMContentLoaded", () => {
  const os = ObservableScope(queueMicrotask);
  const ui = document.querySelector("main")!;
  const vm = new ScaffoldFormViewModel(os);
  applyBindings(ui, os, vm);
});

class ScaffoldFormViewModel extends ViewModel {
  spec = this.resolve(async () => {
    return await post("GetTemplateSpec", {});
  }, null);

  displayName = this.derive(() => {
    return this.spec()?.display_name;
  });

  description = this.derive(() => {
    return this.spec()?.description;
  });

  options = this.derive(() => {
    return Object.entries(this.spec()?.options ?? {});
  });

  noOptions = this.derive(() => {
    for (const key in this.spec()?.options) return false;
    return true;
  });

  isEnumField(field: [string, OptionProperties]) {
    return field[1]._enum;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    post("Submit", { data });
  }
}

export function post(type: "GetTemplateSpec", body: any): Promise<TemplateManifest | null>;
export function post(type: "Submit", body: { data: { [key: string]: unknown } }): Promise<unknown>;
export function post(type: any, body: any): Promise<unknown> {
  return sendWebviewMessage(type, body);
}
