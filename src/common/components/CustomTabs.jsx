import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { List } from "lucide-react";
import { useCallStore } from "@/public-Store/useCallStore";

const CustomTabs = ({
  tabs,
  requests,
  activeTab,
  removeRequest = { removeRequest },
  setActiveTab,
  variant = "default", // NEW
}) => {
  const [showMobileList, setShowMobileList] = useState(false);
  const isCallRoute = useCallStore((s) => s.isInCall);

  return (

  <Tabs
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      {/* ✅ HIDE ONLY TAB HEADER WHEN IN CALL */}
      {!isCallRoute && (
        <>
          {/* Mobile Tabs */}
          <div className="md:hidden mb-4 relative">
            <div
              className="w-full flex items-center justify-between p-2 cursor-pointer"
              onClick={() => setShowMobileList(!showMobileList)}
            >
              <span className="border-b-2 border-primary pb-2">
                {tabs.find((t) => t.value === activeTab)?.label}
              </span>

              <List className="w-5 h-5 text-gray-600" />
            </div>

            {showMobileList && (
              <div className="absolute left-0 right-0 mt-1 bg-white shadow-lg border rounded-md z-50">
                {tabs.map((tab) => (
                  <div
                    key={tab.value}
                    className={`p-2 cursor-pointer hover:bg-gray-100 ${
                      activeTab === tab.value
                        ? "font-semibold text-primary"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveTab(tab.value);
                      setShowMobileList(false);
                    }}
                  >
                    {tab.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:block">
            <TabsList variant={variant} className="flex space-x-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.value;

                return (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    variant={variant}
                    className="flex items-center gap-2"
                  >
                    {Icon && (
                      <Icon
                        size={16}
                        color={isActive ? "#FFFFFF" : "#DA7100"}
                      />
                    )}
                    {tab.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>
        </>
      )}

      {/* ✅ ALWAYS SHOW CONTENT */}
      {tabs.map((tab) => {
        const Component = tab.component;

        return (
          <TabsContent key={tab.value} value={tab.value}>
            <Component
              setActiveTab={setActiveTab}
              requests={requests}
              removeRequest={removeRequest}
            />
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default CustomTabs;