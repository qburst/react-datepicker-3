import React, { forwardRef, useMemo, useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import DatePicker, {
  registerLocale,
  CalendarContainer,
} from "react-datepicker";
import * as DateFNS from "date-fns";
import { fi } from "date-fns/locale/fi";
import { ptBR } from "date-fns/locale/pt-BR";
import { enGB } from "date-fns/locale/en-GB";
import slugify from "slugify";
import range from "lodash/range";
import { themes } from "prism-react-renderer";
import editIcon from "./edit-regular.svg";

export default class CodeExampleComponent extends React.Component {
  componentDidMount() {
    registerLocale("fi", fi);
    registerLocale("pt-BR", ptBR);
    registerLocale("en-GB", enGB);
  }

  render() {
    const { title, description, component } = this.props.example;
    return (
      <div
        id={`example-${slugify(title, { lower: true })}`}
        className="example"
      >
        <h2 className="example__heading">{title}</h2>
        {description && <p>{description}</p>}
        <div className="row">
          <LiveProvider
            code={component.trim()}
            scope={{
              // NB any globals added here should also be referenced in ../../examples/.eslintrc
              useState,
              useMemo,
              DatePicker,
              CalendarContainer,
              ...DateFNS,
              range,
              fi,
              forwardRef,
            }}
            theme={themes.github}
          >
            <pre className="example__code">
              <img
                src={editIcon}
                className="example__code__edit_icon"
                alt="edit icon"
                title="Edit the code directly on the left side and and see the output on the right"
              />
              <LiveEditor />
            </pre>
            <div className="example__preview">
              <LiveError />
              <LivePreview />
            </div>
          </LiveProvider>
        </div>
      </div>
    );
  }
}
