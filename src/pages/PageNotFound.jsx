import { IconToolsKitchen2 } from "@tabler/icons-react";
import React from "react";
import BaseLayout from "../BaseLayout/BaseLayout";
import theme from "../styles/config";
import { PageNotFoundUp, PageNotFoundWrapper } from "../styles/elements";

export default function PageNotFound() {
  return (
    <React.Fragment>
      <BaseLayout>
        <PageNotFoundUp>
          <PageNotFoundWrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container">
              <IconToolsKitchen2
                size={150}
                strokeWidth={1}
                color={`${theme.primary}`}
              />
              <h1>Page Not Found</h1>
              <p>Error 404</p>
            </div>
          </PageNotFoundWrapper>
        </PageNotFoundUp>
      </BaseLayout>
    </React.Fragment>
  );
}
