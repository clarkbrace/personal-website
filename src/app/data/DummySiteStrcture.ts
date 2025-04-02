import { MainNavigationData, DropDown, PageLink } from "@/components/navigation/DropdownStructure";

export const DummyMainNav: MainNavigationData = {
  mainNavItems: [
    {
      type: "dropdown",
      dropDownItems: [
        {
          type: "dropdown",
          label: "right",
          dropDownItems: [
            {
              type: "dropdown",
              label: "right",
              dropDownItems: [
                { type: "dropdown", label: "right", dropDownItems: [] },
                { type: "dropdown", label: "right", dropDownItems: [] },
              ],
            },
            { type: "dropdown", label: "right", dropDownItems: [] },
          ],
        },
        {
          type: "dropdown",
          label: "right",
          dropDownItems: [
            {
              type: "dropdown",
              label: "right",
              dropDownItems: [
                { type: "dropdown", label: "right", dropDownItems: [] },
                {
                  type: "dropdown",
                  label: "right",
                  dropDownItems: [
                    { type: "dropdown", label: "right", dropDownItems: [] },
                    { type: "dropdown", label: "right", dropDownItems: [] },
                  ],
                },
              ],
            },
            {
              type: "dropdown",
              label: "right",
              dropDownItems: [
                {
                  type: "dropdown",
                  label: "right",
                  dropDownItems: [
                    { type: "dropdown", label: "right", dropDownItems: [] },
                    { type: "dropdown", label: "right", dropDownItems: [] },
                  ],
                },
                {
                  type: "dropdown",
                  label: "right",
                  dropDownItems: [
                    { type: "dropdown", label: "right", dropDownItems: [] },
                    {
                      type: "dropdown",
                      label: "right",
                      dropDownItems: [
                        {
                          type: "dropdown",
                          label: "right",
                          dropDownItems: [
                            {
                              type: "dropdown",
                              label: "right",
                              dropDownItems: [
                                { type: "dropdown", label: "right", dropDownItems: [] },
                                { type: "dropdown", label: "right", dropDownItems: [] },
                                { type: "dropdown", label: "right", dropDownItems: [] },
                                { type: "dropdown", label: "right", dropDownItems: [] },
                                { type: "dropdown", label: "right", dropDownItems: [] },
                                { type: "dropdown", label: "right", dropDownItems: [] },
                              ],
                            },
                            {
                              type: "dropdown",
                              label: "right",
                              dropDownItems: [
                                { type: "dropdown", label: "right", dropDownItems: [] },
                                {
                                  type: "dropdown",
                                  label: "right",
                                  dropDownItems: [
                                    { type: "dropdown", label: "right", dropDownItems: [] },
                                    {
                                      type: "dropdown",
                                      label: "right",
                                      dropDownItems: [
                                        { type: "dropdown", label: "right", dropDownItems: [] },
                                        { type: "dropdown", label: "right", dropDownItems: [] },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        { type: "dropdown", label: "right", dropDownItems: [] },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
      label: "More Stuff!",
    },
  ],
};
